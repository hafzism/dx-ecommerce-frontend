import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import OrderCard from "../../components/OrderCard";
import Footer from "../../components/Footer";
import { Package, Filter } from "lucide-react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  async function fetchOrders() {
    try {
      const res = await api.get("/admin/orders");
      setOrders(res.data.orders);
      setFilteredOrders(res.data.orders);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter(order => order.status === statusFilter));
    }
  }, [statusFilter, orders]);

  function handleStatusUpdate(updatedOrder) {
    setOrders((prev) =>
      prev.map((o) => (o._id === updatedOrder._id ? updatedOrder : o))
    );
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#D4A574] border-t-transparent mx-auto mb-4"></div>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg">Loading orders...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
              Order Management
            </h1>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
              View and manage all customer orders
            </p>
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Filter Bar */}
          <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-4 mb-6 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-[#D4A574] dark:text-[#C89F6F]" />
              <span className="font-medium text-[#2D2D2D] dark:text-[#E5E5E5]">
                Filter by Status:
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'pending', 'shipped', 'delivered', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    statusFilter === status
                      ? 'bg-[#D4A574] dark:bg-[#C89F6F] text-white shadow-md'
                      : 'bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] hover:bg-[#D4A574] hover:text-white dark:hover:bg-[#C89F6F]'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Orders Grid */}
          {filteredOrders.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredOrders.map((order) => (
                <OrderCard
                  key={order._id}
                  order={order}
                  onStatusUpdate={handleStatusUpdate}
                />
              ))}
            </div>
          ) : (
            <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-12 text-center shadow-lg">
              <Package size={48} className="mx-auto mb-4 text-[#6B6B6B] dark:text-[#A0A0A0]" />
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg">
                {statusFilter === 'all' ? 'No orders found' : `No ${statusFilter} orders found`}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminOrders;