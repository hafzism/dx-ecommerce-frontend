import React, { useState } from "react";
import api from "../services/axios";
import { ShoppingCart, Plus, Minus, Package, RefreshCw, CreditCard, Truck, BookOpen, Tag } from "lucide-react";

const BookDetails = ({
  _id,
  name,
  price,
  catdesc,
  category,
  image,
  description,
  author,
}) => {
  const [qty, setQty] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const increment = () => setQty((q) => Math.min(99, q + 1));
  const decrement = () => setQty((q) => Math.max(1, q - 1));

  const handleAddToCart = async () => {
    try {
      setIsAddingToCart(true);
      const response = await api.post("/cart", {
        product_id: _id,
        quantity: qty,
      });
      alert(response.data.message || "Added to cart successfully!");
    } catch (error) {
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
        <a href="/shop" className="hover:text-[#D4A574] dark:hover:text-[#C89F6F] transition-colors">
          Shop
        </a>
        <span className="mx-2">/</span>
        <a href={`/shop`} className="hover:text-[#D4A574] dark:hover:text-[#C89F6F] transition-colors">
          {category}
        </a>
        <span className="mx-2">/</span>
        <span className="text-[#2D2D2D] dark:text-[#E5E5E5]">{name}</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        
        {/* Left: Book Image */}
        <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-2xl p-6 shadow-lg">
          <div className="relative">
            <img
              src={`${import.meta.env.VITE_API_URL}${image}`}
              alt={name}
              className="w-full h-auto rounded-xl shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x600/D4A574/FFFFFF?text=Book+Cover';
              }}
            />
          </div>
        </div>

        {/* Right: Book Info */}
        <div className="flex flex-col gap-6">
          
          {/* Title & Author */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
              {name}
            </h1>
            {author && (
              <p className="text-lg text-[#6B6B6B] dark:text-[#A0A0A0] flex items-center gap-2">
                <BookOpen size={18} className="text-[#D4A574] dark:text-[#C89F6F]" />
                by <span className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">{author}</span>
              </p>
            )}
          </div>

          {/* Category */}
          <div className="flex items-center gap-2 text-sm">
            <Tag size={16} className="text-[#D4A574] dark:text-[#C89F6F]" />
            <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Category:</span>
            <span className="font-semibold text-[#8B4513] dark:text-[#C89F6F]">{category}</span>
          </div>

          {/* Price */}
          <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-xl p-6 border-2 border-[#D4A574] dark:border-[#C89F6F]">
            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mb-1">Price</p>
            <p className="text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F]">₹{price}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">About this book</h3>
            <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#6B6B6B] dark:text-[#A0A0A0]">Quantity:</span>
                <div className="flex items-center border-2 border-[#D4A574] dark:border-[#C89F6F] rounded-lg overflow-hidden">
                  <button
                    onClick={decrement}
                    className="px-4 py-2 bg-[#FAF8F5] dark:bg-[#1A1A1A] hover:bg-[#D4A574] hover:text-white dark:hover:bg-[#C89F6F] transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6 py-2 text-lg font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] bg-[#FFFFFF] dark:bg-[#242424]">
                    {qty}
                  </span>
                  <button
                    onClick={increment}
                    className="px-4 py-2 bg-[#FAF8F5] dark:bg-[#1A1A1A] hover:bg-[#D4A574] hover:text-white dark:hover:bg-[#C89F6F] transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="flex-1 sm:flex-auto flex items-center justify-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={20} />
                {isAddingToCart ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4">
              <Package size={20} className="text-[#D4A574] dark:text-[#C89F6F] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] text-sm">100% Original</p>
                <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">Authentic books guaranteed</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4">
              <CreditCard size={20} className="text-[#D4A574] dark:text-[#C89F6F] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] text-sm">Cash on Delivery</p>
                <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">Available on this product</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4">
              <RefreshCw size={20} className="text-[#D4A574] dark:text-[#C89F6F] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] text-sm">Easy Returns</p>
                <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">7 days return policy</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4">
              <Truck size={20} className="text-[#D4A574] dark:text-[#C89F6F] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] text-sm">Free Shipping</p>
                <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">On orders above ₹499</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;