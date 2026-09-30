import {
  Link
} from "react-router-dom";

import {
  useCart
} from "../context/CartContext";

import {
  useAuth
} from "../context/AuthContext";

function Checkout() {

  const {
    cart,
    cartTotal
  } = useCart();

  const {
    user
  } = useAuth();

  return (
    <section className="page narrow-page">

      <div className="page-heading">

        <span>
          CHECKOUT
        </span>

        <h1>
          Complete Your Order
        </h1>

      </div>

      <div className="checkout-card">

        <div className="checkout-success">
          ✓
        </div>

        <h2>
          Hello, {user?.name}
        </h2>

        <p>
          You are successfully authenticated.
        </p>

        <div className="checkout-total">

          <span>
            Cart Items
          </span>

          <strong>
            {cart.reduce(
              (total, item) =>
                total + item.quantity,
              0
            )}
          </strong>

        </div>

        <div className="checkout-total">

          <span>
            Order Total
          </span>

          <strong>
            ${cartTotal.toFixed(2)}
          </strong>

        </div>

        <button
          className="primary-button full-button"
          onClick={() =>
            alert(
              "Demo order placed successfully!"
            )
          }
        >
          Place Demo Order
        </button>

        <Link
          to="/shop"
          className="continue-shopping"
        >
          ← Continue Shopping
        </Link>

      </div>

    </section>
  );
}

export default Checkout;