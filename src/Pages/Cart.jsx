import { Link } from "react-router-dom";

import {
  useCart
} from "../context/CartContext";

function Cart() {

  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  if (cart.length === 0) {

    return (
      <section className="empty-cart">

        <div className="empty-cart-icon">
          🛒
        </div>

        <h1>
          Your Cart is Empty
        </h1>

        <p>
          Add some products from the shop.
        </p>

        <Link
          to="/shop"
          className="primary-button"
        >
          Start Shopping
        </Link>

      </section>
    );
  }

  return (
    <section className="page">

      <div className="page-heading">

        <span>
          SHOPPING CART
        </span>

        <h1>
          Your Cart
        </h1>

      </div>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (

            <article
              key={item.id}
              className="cart-item"
            >

              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="cart-item-info">

                <h3>
                  {item.title}
                </h3>

                <p>
                  ${item.price.toFixed(2)}
                </p>

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    −
                  </button>

                  <strong>
                    {item.quantity}
                  </strong>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="cart-item-right">

                <strong>
                  $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </strong>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  Remove
                </button>

              </div>

            </article>

          ))}

        </div>

        <aside className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">
            <span>
              Items
            </span>

            <strong>
              {cart.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}
            </strong>
          </div>

          <div className="summary-row total">
            <span>
              Total
            </span>

            <strong>
              ${cartTotal.toFixed(2)}
            </strong>
          </div>

          <Link
            to="/checkout"
            className="checkout-button"
          >
            Proceed to Checkout
          </Link>

        </aside>

      </div>

    </section>
  );
}

export default Cart;