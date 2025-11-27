import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./ProductList.css";

export default function ProductList() {
  console.log("ProductList rendered");

  const { state, dispatch } = useContext(AppContext);
  const { products, filter } = state.product;

  const filteredProducts = products.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <div className="product-list">
      <h2>Products</h2>

      <div className="filter-buttons">
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
        >
          All
        </button>

        <button
          onClick={() =>
            dispatch({ type: "SET_FILTER", payload: "electronics" })
          }
        >
          Electronics
        </button>

        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "clothes" })}
        >
          Clothes
        </button>
      </div>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id} className="product-item">
            <span>{p.title}</span>

            <button
              className="like-button"
              onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: p.id })}
            >
              {p.liked ? "❤️" : "🤍"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
