import {
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext";

function Login() {

  const {
    loginAsGuest
  } = useAuth();

  const navigate =
    useNavigate();

  const location =
    useLocation();

  function handleGuestLogin() {

    loginAsGuest();

    const destination =
      location.state?.from ||
      "/shop";

    navigate(
      destination,
      { replace: true }
    );
  }

  return (
    <section className="login-page">

      <div className="login-card">

        <div className="login-icon">
          👤
        </div>

        <h1>
          Welcome Back
        </h1>

        <p>
          Login as a guest to continue
          to checkout.
        </p>

        <button
          className="primary-button full-button"
          onClick={handleGuestLogin}
        >
          Login as Guest
        </button>

        <small>
          This is a mock authentication
          flow for Sprint 06.
        </small>

      </div>

    </section>
  );
}

export default Login;