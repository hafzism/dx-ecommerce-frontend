import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";

const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  const product = item.product_id;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-4">
      {/* Product Image */}
      <div className="relative group">
        <img
          className="w-24 h-32 sm:w-28 sm:h-36 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
          src={`${import.meta.env.VITE_API_URL}${product.image}`}
          alt={product.name}
        />
        <div className="absolute inset-0 bg-[#8B4513]/10 dark:bg-[#C89F6F]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold text-[#8B4513] dark:text-[#C89F6F] line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#D4A574] dark:text-[#C89F6F]">
            ₹{product.price}
          </span>
          <span className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">per item</span>
        </div>
        
        {/* Quantity Controls - Mobile */}
        <div className="flex items-center gap-4 sm:hidden">
          <div className="flex items-center gap-2 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-1">
            <button
              onClick={() => onDecrease(item._id)}
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#242424] hover:bg-[#D4A574] dark:hover:bg-[#C89F6F] text-[#8B4513] dark:text-[#C89F6F] hover:text-white transition-all shadow-sm"
            >
              <Minus size={16} />
            </button>
            <span className="w-12 text-center font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
              {item.quantity}
            </span>
            <button
              onClick={() => onIncrease(item._id)}
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#242424] hover:bg-[#D4A574] dark:hover:bg-[#C89F6F] text-[#8B4513] dark:text-[#C89F6F] hover:text-white transition-all shadow-sm"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button
            onClick={() => onDelete(item._id)}
            className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all flex items-center gap-2"
          >
            <Trash2 size={16} />
            <span className="text-sm font-medium">Remove</span>
          </button>
        </div>

        <div className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
          Subtotal: <span className="font-semibold text-[#8B4513] dark:text-[#C89F6F]">₹{product.price * item.quantity}</span>
        </div>
      </div>

      {/* Quantity Controls - Desktop */}
      <div className="hidden sm:flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-1">
          <button
            onClick={() => onDecrease(item._id)}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white dark:bg-[#242424] hover:bg-[#D4A574] dark:hover:bg-[#C89F6F] text-[#8B4513] dark:text-[#C89F6F] hover:text-white transition-all shadow-sm"
          >
            <Minus size={18} />
          </button>
          <span className="w-14 text-center font-semibold text-lg text-[#2D2D2D] dark:text-[#E5E5E5]">
            {item.quantity}
          </span>
          <button
            onClick={() => onIncrease(item._id)}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white dark:bg-[#242424] hover:bg-[#D4A574] dark:hover:bg-[#C89F6F] text-[#8B4513] dark:text-[#C89F6F] hover:text-white transition-all shadow-sm"
          >
            <Plus size={18} />
          </button>
        </div>

        <button
          onClick={() => onDelete(item._id)}
          className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all shadow-sm hover:shadow-md"
          title="Remove from cart"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;