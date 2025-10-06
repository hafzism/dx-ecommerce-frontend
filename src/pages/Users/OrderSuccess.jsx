import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarAdmin";

const OrderSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 text-center">
        <h1 className="text-2xl font-semibold mb-4">Order Placed Successfully</h1>
        {order ? (
          <>
            <p className="mb-4">Order ID: <b>{order._id}</b></p>
            <p className="mb-6">We will email updates to your address.</p>
            <button className="bg-black text-white px-6 py-2" onClick={() => navigate("/")}>Continue Shopping</button>
          </>
        ) : (
          <>
            <p className="mb-6">Thank you! Your order is placed.</p>
            <button className="bg-black text-white px-6 py-2" onClick={() => navigate("/")}>Go Home</button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccess;
