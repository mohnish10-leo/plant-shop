import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textShadow: "2px 2px 4px #000"
    }}>
      <h1>Green Haven Plants</h1>
      <p>We provide beautiful indoor plants to bring life and freshness to your home.</p>
      <button onClick={() => navigate("/products")} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
