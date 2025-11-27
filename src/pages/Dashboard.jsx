import "./Dashboard.css";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ProductList from "../components/ProductList";

export default function Dashboard() {
  console.log("Dashboard rendered");

  return (
    <div className="dashboard">
      <h1>E-Commerce Mini Dashboard</h1>

      <ThemeSwitcher />
      <ProductList />
    </div>
  );
}
