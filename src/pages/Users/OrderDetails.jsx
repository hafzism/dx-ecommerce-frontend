import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { 
  Package, 
  MapPin, 
  Phone, 
  Calendar, 
  DollarSign, 
  ArrowLeft,
  BookOpen,
  Truck,
  CheckCircle
} from "lucide-react";

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await api.get(`/orders/${id}`);
        setOrder(res.data.order);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch order details");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-600",
      processing: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-600",
      shipped: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-600",
      delivered: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-600",
      cancelled: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-600"
    };
    return colors[status?.toLowerCase()] || colors.pending;
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: <Package className="w-5 h-5" />,
      processing: <Package className="w-5 h-5" />,
      shipped: <Truck className="w-5 h-5" />,
      delivered: <CheckCircle className="w-5 h-5" />,
      cancelled: <Package className="w-5 h-5" />
    };
    return icons[status?.toLowerCase()] || icons.pending;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A]">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-[#D4A574] dark:text-[#C89F6F] animate-pulse mx-auto mb-4" />
            <p className="text-[#2D2D2D] dark:text-[#E5E5E5] text-lg">Loading order details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !order) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1A1A1A] px-4">
          <div className="text-center bg-white dark:bg-[#242424] rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
              {error || "Order not found"}
            </h2>
            <button
              onClick={() => navigate("/orders")}
              className="mt-4 text-[#D4A574] dark:text-[#C89F6F] hover:underline"
            >
              ← Back to Orders
            </button>
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
        {/* Back Button */}
        <button
          onClick={() => navigate("/orders")}
          className="flex items-center gap-2 text-[#8B4513] dark:text-[#C89F6F] hover:text-[#D4A574] dark:hover:text-[#A0653F] transition-colors mb-6 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Orders
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Order Details
              </h1>
              <p className="text-sm font-mono text-[#6B6B6B] dark:text-[#A0A0A0]">
                Order ID: {order._id}
              </p>
            </div>
            
            <div className={`px-4 py-2 rounded-lg border-2 flex items-center gap-2 ${getStatusColor(order.status)}`}>
              {getStatusIcon(order.status)}
              <span className="font-semibold uppercase text-sm">{order.status}</span>
            </div>
          </div>
          <div className="h-[2px] w-20 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Info Card */}
            <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-4 flex items-center gap-2">
                <Package size={24} />
                Order Information
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#D4A574] dark:text-[#C89F6F] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mb-1">Order Date</p>
                    <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5]">
                      {new Date(order.createdAt).toLocaleString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#D4A574] dark:text-[#C89F6F] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mb-1">Total Amount</p>
                    <p className="font-bold text-[#D4A574] dark:text-[#C89F6F] text-xl">
                      ₹{order.total_price}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Card */}
            <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-4 flex items-center gap-2">
                <BookOpen size={24} />
                Order Items
              </h2>
              
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg"
                  >
                    {item.product_id?.image && (
                      <img
                        src={`${import.meta.env.VITE_API_URL}${item.product_id.image}`}
                        alt={item.product_id?.name}
                        className="w-16 h-20 object-cover rounded shadow-md"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-1">
                        {item.product_id?.name || "Product"}
                      </h3>
                      <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#D4A574] dark:text-[#C89F6F]">
                        ₹{item.item_total}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-4 flex items-center gap-2">
                <MapPin size={24} />
                Delivery Address
              </h2>
              
              <div className="space-y-3 text-sm">
                <div className="p-4 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg">
                  <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] mb-2">
                    {order.address.line2}
                  </p>
                  <p className="text-[#6B6B6B] dark:text-[#A0A0A0] leading-relaxed">
                    {order.address.line1}<br />
                    {order.address.city}, {order.address.state}<br />
                    {order.address.postal_code}<br />
                    {order.address.country}
                  </p>
                </div>

                <div className="flex items-center gap-2 p-3 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg">
                  <Phone className="w-4 h-4 text-[#D4A574] dark:text-[#C89F6F] shrink-0" />
                  <span className="text-[#2D2D2D] dark:text-[#E5E5E5] font-medium">
                    {order.address.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;