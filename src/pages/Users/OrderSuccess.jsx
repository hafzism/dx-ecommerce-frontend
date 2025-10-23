import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarAdmin";
import { CheckCircle, Package, Home, Eye } from "lucide-react";

const OrderSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="bg-white dark:bg-[#242424] rounded-xl shadow-2xl p-8 sm:p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#2C5F2D] dark:bg-[#4A7C4E] opacity-20 rounded-full animate-ping"></div>
                <div className="relative bg-[#2C5F2D] dark:bg-[#4A7C4E] p-6 rounded-full">
                  <CheckCircle size={64} className="text-white" />
                </div>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-4">
              Order Placed Successfully!
            </h1>
            
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg mb-8">
              Thank you for your purchase. Your literary journey continues!
            </p>

            {/* Order Details */}
            {order && (
              <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-[#D4A574] dark:text-[#C89F6F]" />
                  <h2 className="text-xl font-semibold text-[#8B4513] dark:text-[#C89F6F]">
                    Order Details
                  </h2>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-[#D4A574]/20 dark:border-[#C89F6F]/20">
                    <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Order ID:</span>
                    <span className="font-mono font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] text-sm">
                      {order._id}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-[#D4A574]/20 dark:border-[#C89F6F]/20">
                    <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Total Amount:</span>
                    <span className="font-bold text-[#D4A574] dark:text-[#C89F6F] text-lg">
                      ₹{order.total_price}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#6B6B6B] dark:text-[#A0A0A0]">Status:</span>
                    <span className="px-3 py-1 bg-[#2C5F2D]/10 dark:bg-[#4A7C4E]/20 text-[#2C5F2D] dark:text-[#4A7C4E] rounded-full text-sm font-semibold">
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Info Message */}
            <div className="bg-[#D4A574]/10 dark:bg-[#C89F6F]/10 border-l-4 border-[#D4A574] dark:border-[#C89F6F] p-4 rounded mb-8 text-left">
              <p className="text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
                📧 We've sent a confirmation email to your registered address with all the order details. 
                You can track your order status anytime from your orders page.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {order && (
                <button
                  onClick={() => navigate(`/orders/${order._id}`)}
                  className="group flex items-center justify-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Eye size={20} />
                  View Order Details
                </button>
              )}
              
              <button
                onClick={() => navigate("/")}
                className="group flex items-center justify-center gap-2 bg-[#8B4513] dark:bg-[#A0653F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6D3410] dark:hover:bg-[#8B4513] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Home size={20} />
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-sm">
              Need help? Contact our support team at{" "}
              <a href="mailto:support@litbay.com" className="text-[#D4A574] dark:text-[#C89F6F] hover:underline font-semibold">
                hafeezpallath@gmail.com 
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default OrderSuccess;