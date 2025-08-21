import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const items = useSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
      <nav>
        <Link to="/products" style={{ marginRight: "20px" }}>Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div>
        🛒 {totalCount}
      </div>
    </header>
  );
}

export default Header;
