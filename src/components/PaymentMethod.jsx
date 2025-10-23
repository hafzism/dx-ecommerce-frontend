import React from "react";
import { Banknote, CheckCircle, ArrowRight } from "lucide-react";

const PaymentMethod = ({ submitting }) => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Banknote className="w-6 h-6 text-[#D4A574] dark:text-[#C89F6F]" />
          <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
            Payment Method
          </h2>
        </div>
        <div className="h-[2px] w-16 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
      </div>

      {/* Payment Options */}
      <div className="space-y-3 mb-6">
        <div className="relative border-2 border-[#2C5F2D] dark:border-[#4A7C4E] bg-[#2C5F2D]/5 dark:bg-[#4A7C4E]/10 rounded-lg p-4 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#2C5F2D] dark:border-[#4A7C4E] bg-[#2C5F2D] dark:bg-[#4A7C4E] flex items-center justify-center flex-shrink-0">
              <CheckCircle size={16} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                Cash on Delivery
              </p>
              <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
                Pay when your order arrives
              </p>
            </div>
          </div>
        </div>

        {/* Disabled Options (for future) */}
        <div className="relative border-2 border-[#D4A574]/20 dark:border-[#C89F6F]/20 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4 opacity-50 cursor-not-allowed">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                Credit/Debit Card
              </p>
              <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
                Coming soon
              </p>
            </div>
          </div>
        </div>

        <div className="relative border-2 border-[#D4A574]/20 dark:border-[#C89F6F]/20 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4 opacity-50 cursor-not-allowed">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#D4A574]/30 dark:border-[#C89F6F]/30 flex-shrink-0"></div>
            <div>
              <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                UPI Payment
              </p>
              <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full group flex items-center justify-center gap-3 bg-[#8B4513] dark:bg-[#A0653F] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#6D3410] dark:hover:bg-[#8B4513] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
      >
        {submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Processing Order...
          </>
        ) : (
          <>
            Place Order
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {/* Trust Message */}
      <p className="text-xs text-center text-[#6B6B6B] dark:text-[#A0A0A0] mt-4">
        By placing your order, you agree to our terms and conditions
      </p>
    </div>
  );
};

export default PaymentMethod;