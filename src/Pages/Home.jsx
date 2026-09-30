import { Link } from "react-router-dom";

function Home() {

  return (
    <section className="home-page">

      <div className="hero">

        <div>

          <span className="hero-badge">
            WELCOME TO SHOPZONE
          </span>

          <h1>
            Discover Products
            You’ll Love.
          </h1>

          <p>
            Browse our collection, explore
            product details and add your
            favorite products to your cart.
          </p>

          <Link
            to="/shop"
            className="primary-button"
          >
            Explore Shop →
          </Link>

        </div>

        <div className="hero-visual">
          🛍️
        </div>

      </div>

      <div className="features">

        <div>
          <span>🚚</span>
          <h3>Fast Delivery</h3>
          <p>
            Quick and reliable delivery.
          </p>
        </div>

        <div>
          <span>🔒</span>
          <h3>Secure Shopping</h3>
          <p>
            Your shopping experience matters.
          </p>
        </div>

        <div>
          <span>⭐</span>
          <h3>Quality Products</h3>
          <p>
            Discover products from our catalog.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Home;