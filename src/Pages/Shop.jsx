import {
  useEffect,
  useState
} from "react";

import ProductCard from "../components/ProductCart";
import Loading from "../components/Loading";

function Shop() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    async function fetchProducts() {

      try {

        setLoading(true);

        const response =
          await fetch(
            "https://dummyjson.com/products"
          );

        if (!response.ok) {
          throw new Error(
            "Failed to load products."
          );
        }

        const data =
          await response.json();

        setProducts(data.products);

      } catch (error) {

        setError(
          error.message
        );

      } finally {

        setLoading(false);
      }
    }

    fetchProducts();

  }, []);

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

      <div className="page-heading">

        <span>
          SHOPZONE STORE
        </span>

        <h1>
          Explore Products
        </h1>

        <p>
          Find something you like and
          add it to your cart.
        </p>

      </div>

      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default Shop;