import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <article className="product-card">

      <Link
        to={`/product/${product.id}`}
        className="product-image-link"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-content">

        <span className="category">
          {product.category}
        </span>

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">

          <strong>
            ${product.price.toFixed(2)}
          </strong>

          <button
            onClick={() =>
              addToCart(product)
            }
          >
            Add
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;