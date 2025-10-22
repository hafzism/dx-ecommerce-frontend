import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

const CartTotals = ({ subtotal }) => {
  const shippingFee = 0;
  const total = subtotal + shippingFee;
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6 sticky top-24">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
          Order Summary
        </h2>
        <div className="h-[2px] w-16 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center py-3 border-b border-[#D4A574]/20 dark:border-[#C89F6F]/20">
          <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Subtotal</span>
          <span className="text-lg font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
            ₹{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center py-3 border-b border-[#D4A574]/20 dark:border-[#C89F6F]/20">
          <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Shipping</span>
          <div className="text-right">
            {shippingFee === 0 ? (
              <div>
                <span className="text-[#2C5F2D] dark:text-[#4A7C4E] font-semibold">FREE</span>
                <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">Always free shipping</p>
              </div>
            ) : (
              <span className="text-lg font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                ₹{shippingFee}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center py-4 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg px-4">
          <span className="text-lg font-semibold text-[#8B4513] dark:text-[#C89F6F]">Total</span>
          <span className="text-2xl font-bold text-[#D4A574] dark:text-[#C89F6F]">
            ₹{total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={() => navigate("/placeorder")}
        className="w-full group flex items-center justify-center gap-3 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Proceed to Checkout
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
        <div className="flex items-start gap-3 text-sm">
          <ShieldCheck className="w-5 h-5 text-[#2C5F2D] dark:text-[#4A7C4E] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] mb-1">
              Secure Checkout
            </p>
            <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">
              Your payment information is safe and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;