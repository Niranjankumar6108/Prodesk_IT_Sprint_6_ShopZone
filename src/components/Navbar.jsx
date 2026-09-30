import {
  Link,
  NavLink
} from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { cartCount } = useCart();

  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        ShopZone
      </Link>

      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/shop">
          Shop
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        {isAuthenticated ? (
          <>
            <NavLink to="/checkout">
              Checkout
            </NavLink>

            <button
              className="logout-button"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login">
            Login
          </NavLink>
        )}

        <Link
          to="/cart"
          className="cart-link"
        >
          🛒

          <span>
            Cart
          </span>

          {cartCount > 0 && (
            <b className="cart-badge">
              {cartCount}
            </b>
          )}
        </Link>

      </div>

      {user && (
        <div className="user-display">
          👤 {user.name}
        </div>
      )}

    </nav>
  );
}

export default Navbar;