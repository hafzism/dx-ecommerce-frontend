import React from "react";
import { Receipt } from "lucide-react";

const CartSummary = ({ subtotal, shippingFee, loadingCart }) => {
  const total = subtotal + shippingFee;

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Receipt className="w-6 h-6 text-[#D4A574] dark:text-[#C89F6F]" />
          <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
            Order Summary
          </h2>
        </div>
        <div className="h-[2px] w-16 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-[#D4A574]/20 dark:border-[#C89F6F]/20">
          <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Subtotal</span>
          <span className="text-lg font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
            {loadingCart ? (
              <span className="inline-block w-16 h-5 bg-[#D4A574]/20 dark:bg-[#C89F6F]/20 animate-pulse rounded"></span>
            ) : (
              `₹${subtotal.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-[#D4A574]/20 dark:border-[#C89F6F]/20">
          <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Shipping Fee</span>
          <span className="text-lg font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
            ₹{shippingFee.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center py-4 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg px-4">
          <span className="text-lg font-semibold text-[#8B4513] dark:text-[#C89F6F]">Total</span>
          <span className="text-2xl font-bold text-[#D4A574] dark:text-[#C89F6F]">
            {loadingCart ? (
              <span className="inline-block w-20 h-7 bg-[#D4A574]/20 dark:bg-[#C89F6F]/20 animate-pulse rounded"></span>
            ) : (
              `₹${total.toFixed(2)}`
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;