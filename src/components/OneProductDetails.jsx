import React, { useState } from "react";
import api from "../services/axios";

const OneProductDetails = ({
  _id,
  name,
  price,
  catdesc,
  category,
  image,
  description,
}) => {
  const [qty, setQty] = useState(1);
  const increment = () => setQty((q) => Math.min(99, q + 1));
  const decrement = () => setQty((q) => Math.max(1, q - 1));

  const handleAddToCart = async () => {
    try {
      const response = await api.post("/cart", {
        product_id: _id,
        quantity: qty,
      });
      alert(response.data.message);
    } catch (error) {
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("Something went wrong");
      }
      // console.error(error);
    }
  };

  return (
    <>
      <div className="border-t-2 pt-10 transition-opacity duration-500 ease-in opacity-100">
        <div className="flex flex-col sm:flex-row gap-12">

          <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">

            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              <img
                src={`http://localhost:3000${image}`}
                alt="Product Thumbnail"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg hover:opacity-80 transition"
              />
            </div>

            <div className="w-full sm:w-[80%]">
              <img
                src={`http://localhost:3000${image}`}
                alt={name}
                className="w-full h-auto rounded-xl shadow"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h1 className="font-semibold text-2xl">{name}</h1>

            <p className="text-3xl font-semibold">₹ {price}</p>

            <p className="text-gray-500 md:w-4/5">{description}</p>

            <div className="text-sm text-gray-500 flex flex-col gap-1">
              <p>Category: {category}</p>
              <p>{catdesc}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={decrement}
                  className="px-3 py-1 text-lg font-semibold hover:bg-gray-200"
                >
                  −
                </button>
                <span className="px-4 py-1 text-base font-medium">{qty}</span>
                <button
                  onClick={increment}
                  className="px-3 py-1 text-lg font-semibold hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <button className="bg-black text-white px-6 py-3 text-sm rounded-lg hover:bg-gray-800 active:bg-gray-700 transition" onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>

            <div className="border-t mt-5 pt-4 text-sm text-gray-600 leading-relaxed">
              <p>✅ 100% Original product.</p>
              <p>💵 Cash on delivery is available on this product.</p>
              <p>🔁 Easy return and exchange policy within 7 days.</p>
              <p>📦 Free shipping on orders above ₹499.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneProductDetails;
