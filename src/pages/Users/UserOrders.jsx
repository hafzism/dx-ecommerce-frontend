import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Package, Calendar, DollarSign, ChevronRight, ShoppingBag, BookOpen } from "lucide-react";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/orders");
        setOrders(res.data.orders);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch your orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
      processing: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
      shipped: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
      delivered: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
      cancelled: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
    };
    return colors[status?.toLowerCase()] || colors.pending;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A]">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-[#D4A574] dark:text-[#C89F6F] animate-pulse mx-auto mb-4" />
            <p className="text-[#2D2D2D] dark:text-[#E5E5E5] text-lg">Loading your orders...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A] px-4">
          <div className="text-center bg-white dark:bg-[#242424] rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">Oops!</h2>
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Package className="w-8 h-8 text-[#D4A574] dark:text-[#C89F6F]" />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
              My Orders
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-20 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
              {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
            </p>
          </div>
        </div>

        {orders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div
                key={order._id}
                onClick={() => navigate(`/orders/${order._id}`)}
                className="group bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105"
              >
                {/* Order Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#D4A574] dark:text-[#C89F6F]" />
                    <span className="text-xs font-mono text-[#6B6B6B] dark:text-[#A0A0A0]">
                      #{order._id.slice(-8)}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#D4A574] dark:text-[#C89F6F] group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Status Badge */}
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                {/* Order Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <DollarSign className="w-4 h-4 text-[#D4A574] dark:text-[#C89F6F] shrink-0" />
                    <div>
                      <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">Total Amount</p>
                      <p className="font-bold text-[#D4A574] dark:text-[#C89F6F] text-lg">
                        ₹{order.total_price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-[#D4A574] dark:text-[#C89F6F] shrink-0" />
                    <div>
                      <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0]">Order Date</p>
                      <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-6 pt-4 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
                  <button className="w-full text-center text-sm font-semibold text-[#D4A574] dark:text-[#C89F6F] group-hover:text-[#8B4513] dark:group-hover:text-[#A0653F] transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#242424] rounded-xl shadow-lg">
            <Package className="w-20 h-20 text-[#D4A574] dark:text-[#C89F6F] mx-auto mb-6 opacity-50" />
            <h2 className="text-2xl font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-3">
              No Orders Yet
            </h2>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mb-6">
              You haven't placed any orders yet. Start shopping now!
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="inline-block bg-[#D4A574] dark:bg-[#C89F6F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Browse Books
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default UserOrders;