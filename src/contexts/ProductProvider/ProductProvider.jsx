import React, { useEffect, useState } from "react";
import { ProductContext } from "../AuthContext/AuthContext";
import { getStoredItem } from "../../utils/AddToLocalDB";

const ProductProvider = ({ children }) => {
  const [carts, setCarts] = useState(() => getStoredItem());

  // ✅ Whenever localStorage changes (like add/remove), listen and update context
  useEffect(() => {
    const handleStorageChange = () => {
      setCarts(getStoredItem());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Optional helper for adding item (keeps both state + storage in sync)
  const addToCart = (id) => {
    setCarts((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };
const removeFromCart = (id) => {
  setCarts((prev) => {
    const updated = prev.filter((itemId) => itemId !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    return updated;
  });
};
  const productInfo = { carts, addToCart, removeFromCart };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
