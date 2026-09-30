import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart =
      localStorage.getItem("shopzone-cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  /*
    Persist cart whenever it changes.
  */
  useEffect(() => {
    localStorage.setItem(
      "shopzone-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  /*
    Add product to cart.
    If product already exists,
    increase quantity.
  */
  function addToCart(product) {

    setCart((previousCart) => {

      const existingProduct =
        previousCart.find(
          (item) => item.id === product.id
        );

      if (existingProduct) {

        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  }

  /*
    Remove product completely.
  */
  function removeFromCart(productId) {

    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== productId
      )
    );
  }

  /*
    Increase quantity.
  */
  function increaseQuantity(productId) {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  /*
    Decrease quantity.
  */
  function decreaseQuantity(productId) {

    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  }

  /*
    Total number of products.
  */
  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  /*
    Total price.
  */
  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  const value = {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}