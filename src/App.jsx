import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
// import Colors from "./components/ColorBg";
import BlogApi from "./Pages/BlogApi";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [message, setMessage] = useState();

  const handleCart = () => {
    if (cartCount < 3) {
      setCartCount((counter) => counter + 1);
      setMessage("");
    } else {
      setMessage(alert(" Out of Stock, Please select another watch"));
    }
  };

  return (
    <>
      {/* <Colors /> */}
      <Card
        Tahir="Props Will be here!"
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
