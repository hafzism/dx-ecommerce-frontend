import React from "react";
import { useNavigate } from "react-router-dom";

const CartTotals = ({ subtotal }) => {
  const shippingFee = 0;
  const total = subtotal + shippingFee;
  const navigate = useNavigate()

  return (
    <div className="flex justify-end my-20">
      <div className="w-full sm:w-[450px]">
        <div className="inline-flex gap-2 items-center mb-4 text-2xl">
          <p>
            cart <span className="text-gray-700 font-medium">totals</span>
          </p>
          <div className="w-8 sm:w-12 h-[2px] bg-gray-700"></div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>Rs {subtotal}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{shippingFee === 0 ? "Free always" : `Rs ${shippingFee}`}</p>
          </div>
          <hr />
          <div className="flex justify-between font-medium">
            <p>Total</p>
            <p>Rs {total}</p>
          </div>

          <div className="w-full text-end">
            <button 
            onClick={() => navigate("/placeorder")}
            className="bg-black text-white text-sm my-8 px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
