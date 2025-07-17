import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleCart = () => {
    if (cartCount < 3) {
      setCartCount((prev) => prev + 1);
    } else {
      alert("Out of Stock, Please select another watch");
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, handleCart }}>
      {children}
    </CartContext.Provider>
  );
};
