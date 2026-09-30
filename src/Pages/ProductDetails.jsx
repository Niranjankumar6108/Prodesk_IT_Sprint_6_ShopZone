import {
  useEffect,
  useState
} from "react";

import {
  Link,
  useParams
} from "react-router-dom";

import { useCart } from "../context/CartContext";
import Loading from "../components/Loading";

function ProductDetails() {

  const { id } = useParams();

  const {
    addToCart
  } = useCart();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    async function fetchProduct() {

      try {

        setLoading(true);

        setError("");

        const response =
          await fetch(
            `https://dummyjson.com/products/${id}`
          );

        if (!response.ok) {
          throw new Error(
            "Product not found."
          );
        }

        const data =
          await response.json();

        setProduct(data);

      } catch (error) {

        setError(
          error.message
        );

      } finally {

        setLoading(false);
      }
    }

    fetchProduct();

  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }

  return (
    <section className="page">

      <Link
        to="/shop"
        className="back-link"
      >
        ← Back to Shop
      </Link>

      <div className="product-details">

        <div className="product-gallery">

          <img
            src={
              product.images?.[0] ||
              product.thumbnail
            }
            alt={product.title}
          />

        </div>

        <div className="details-content">

          <span className="category">
            {product.category}
          </span>

          <h1>
            {product.title}
          </h1>

          <div className="rating">
            ⭐ {product.rating}
          </div>

          <p className="large-description">
            {product.description}
          </p>

          <div className="detail-price">
            ${product.price.toFixed(2)}
          </div>

          <p>
            Stock:
            {" "}
            <strong>
              {product.stock}
            </strong>
          </p>

          <button
            className="primary-button"
            onClick={() => {
              addToCart(product);
            }}
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;