import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Cactus", price: 8, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Fern", price: 14, category: "Outdoor", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Money Plant", price: 20, category: "Indoor", image: "https://via.placeholder.com/100" },
];

function ProductListingPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const isAdded = (id) => items.find((item) => item.id === id);

  return (
    <div>
      <Header />
      <h2 style={{ textAlign: "center" }}>Our Plants</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "150px" }}>
            <img src={plant.image} alt={plant.name} />
            <h4>{plant.name}</h4>
            <p>${plant.price}</p>
            <p><i>{plant.category}</i></p>
            <button
              disabled={isAdded(plant.id)}
              onClick={() => dispatch(addToCart(plant))}
            >
              {isAdded(plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
