import React from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <Header />
      <h2 style={{ textAlign: "center" }}>Shopping Cart</h2>
      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty</p>
      ) : (
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid #ccc", padding: "10px" }}>
              <img src={item.image} alt={item.name} width="50" />
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
              <div>
                <button onClick={() => dispatch(increase(item.id))}>+</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => dispatch(decrease(item.id))}>-</button>
              </div>
              <button onClick={() => dispatch(remove(item.id))}>Delete</button>
            </div>
          ))}
          <h3>Total Items: {items.reduce((sum, i) => sum + i.quantity, 0)}</h3>
          <h3>Total Cost: ${total}</h3>
          <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
          <button onClick={() => navigate("/products")} style={{ marginLeft: "10px" }}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
