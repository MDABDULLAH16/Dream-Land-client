import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { ProductContext } from "../../contexts/AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import { FiTrash2, FiHeart } from "react-icons/fi";
import { toast } from "react-toastify";

const Cart = () => {
  const [storeItems, setStoreItems] = useState([]);
  const products = useLoaderData();
  const { carts, removeFromCart } = useContext(ProductContext);

  useEffect(() => {
    if (carts.length > 0) {
      const selectedItems = products.filter((p) => carts.includes(p.toyId));
      setStoreItems(selectedItems);
    } else {
      setStoreItems([]);
    }
  }, [carts, products]);

   const totalPrice = storeItems.reduce((acc, item) => acc + item.price, 0);
  const shippingCharge = storeItems.length > 0 ? 50 : 0;
  const grandTotal = totalPrice + shippingCharge;

  const handleBuyNow = () => {
    if (storeItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    toast.success("Proceeding to checkout...");
    // You can redirect or open payment modal here
  };

  return (
   <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          {/* 🧱 Left Side — Cart Items */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-2xl text-secondary font-bold mb-4">
              🛍 Your Shopping Cart ({storeItems.length})
            </h1>
  
            {storeItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              storeItems.map((item) => (
                <div
                  key={item.toyId}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.pictureURL || "https://via.placeholder.com/80"}
                      alt={item.toyName}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-lg dark:text-gray-200">
                        {item.toyName}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${item.price} • {item.availableQuantity} pcs available
                      </p>
                    </div>
                  </div>
  
                  <div className="flex items-center gap-2">
                    <button className="btn btn-square btn-ghost hover:text-pink-500">
                      <FiHeart size={22} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.toyId)}
                      className="btn btn-square btn-ghost hover:text-red-600"
                    >
                      <FiTrash2 size={22} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
  
          {/* 💰 Right Side — Cart Summary */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 h-fit sticky top-20 shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Order Summary</h2>
  
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <hr className="border-gray-400 dark:border-gray-700 my-2" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
  
            <button
              onClick={handleBuyNow}
              className="mt-6 w-full bg-secondary hover:bg-accent text-white py-2 rounded-lg transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </Container>
   </div>
  );
};

export default Cart;
