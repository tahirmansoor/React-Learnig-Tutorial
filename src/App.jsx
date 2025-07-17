import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import BlogApi from "./Pages/BlogApi";
import { useCart } from "./Context/CartContext";

function App() {
  const { handleCart } = useCart();
  const [message, setMessage] = useState();

  return (
    <>
      <Card
        smallText="Props Will be here!"
        btnText="Add to Cart"
        onAddToCart={handleCart}
      />
      {message && (
        <p style={{ color: "red", textAlign: "center" }}>{message}</p>
      )}

      <BlogApi />
    </>
  );
}

export default App;
