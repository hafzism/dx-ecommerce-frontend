import React from "react";

const PaymentMethod = ({ submitting }) => {
  return (
    <div className="mt-12">
      <div className="inline-flex gap-2 items-center mb-3">
        <p className="text-gray-500">
          PAYMENT <span className="text-gray-700 font-medium">METHOD</span>
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>

      <div className="flex gap-3 flex-col lg:flex-row">
        <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
          <p className="min-w-3.5 h-3.5 border rounded-full bg-green-400"></p>
          <p className="text-gray-500 text-sm font-medium mx-4">
            CASH ON DELIVERY
          </p>
        </div>
      </div>

      <div className="w-full text-end mt-8">
        <button
          type="submit"
          disabled={submitting}
          className="bg-black text-white px-16 py-3 text-sm disabled:opacity-60"
        >
          {submitting ? "Placing..." : "PLACE ORDER"}
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
