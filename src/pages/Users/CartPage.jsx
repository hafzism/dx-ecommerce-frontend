import React, { useEffect, useState } from "react";
import CartTotals from "../../components/CartTotals";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import CartItem from "../../components/CartItem";
import { ShoppingCart, BookOpen } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await api.get("/cart");
        setCartItems(res.data.result);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleIncrease = async (id) => {
    try {
      await api.put(`/cart/${id}`, { action: "increase" });
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const handleDecrease = async (id) => {
    try {
      await api.put(`/cart/${id}`, { action: "decrease" });
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (err) {
      console.error("Error decreasing quantity:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product_id.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A]">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-[#D4A574] dark:text-[#C89F6F] animate-pulse mx-auto mb-4" />
            <p className="text-[#2D2D2D] dark:text-[#E5E5E5] text-lg">Loading your cart...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingCart className="w-8 h-8 text-[#D4A574] dark:text-[#C89F6F]" />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
              Your Cart
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-20 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-[#242424] rounded-xl shadow-lg">
            <ShoppingCart className="w-20 h-20 text-[#D4A574] dark:text-[#C89F6F] mx-auto mb-6 opacity-50" />
            <h2 className="text-2xl font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-3">
              Your cart is empty
            </h2>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mb-6">
              Looks like you haven't added any books yet
            </p>
            <a
              href="/shop"
              className="inline-block bg-[#D4A574] dark:bg-[#C89F6F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6">
                {cartItems.map((item, index) => (
                  <div key={item._id}>
                    <CartItem
                      item={item}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                      onDelete={handleDelete}
                    />
                    {index < cartItems.length - 1 && (
                      <hr className="my-4 border-[#D4A574]/20 dark:border-[#C89F6F]/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Totals */}
            <div className="lg:col-span-1">
              <CartTotals subtotal={subtotal} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;