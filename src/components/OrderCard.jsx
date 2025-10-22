import React, { useState } from "react";
import OrderItems from "./OrderItems";
import api from "../services/axios";
import { User, Mail, MapPin, Phone, Calendar, IndianRupee } from "lucide-react";

const OrderCard = ({ order, onStatusUpdate }) => {
  const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

  const statuses = ["pending", "shipped", "delivered", "cancelled"];

  const statusColors = {
    pending:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700",
    shipped:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700",
    delivered:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-700",
    cancelled:
      "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-700",
  };

  async function handleStatusChange(e) {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setLoading(true);

    try {
      const res = await api.put(`/admin/orders/${order._id}`, {
        status: newStatus,
      });
      if (onStatusUpdate) onStatusUpdate(res.data.updated);
      alert("Order status updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
      setStatus(order.status);
    } finally {
      setLoading(false);
    }
  }

  const address = order.address || {};

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl shadow-lg overflow-hidden border border-[#D4A574]/20 dark:border-[#C89F6F]/20 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="bg-[#D4A574] dark:bg-[#C89F6F] p-4">
        <div className="flex justify-between items-start">
          {/* User Info */}
          <div className="flex items-center gap-2 text-white">
            <User size={20} />
            <div>
              <p className="font-semibold text-lg">
                {order.user_id?.username || "Unknown User"}
              </p>

              <div className="flex items-center gap-1 text-sm opacity-90">
                <Mail size={14} />
                <p>{order.user_id?.email || "No email"}</p>
              </div>

              <div className="flex items-center gap-1 text-sm opacity-90">
                <Calendar size={14} />
                <p>{new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="text-right text-white">
            <div className="flex items-center gap-1 justify-end font-bold text-xl">
              <IndianRupee size={20} />
              <span>{order.total_price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Status Badge */}
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${statusColors[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>

        {/* Items */}
        <OrderItems items={order.items} />

        {/* Address Section */}
        <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <MapPin
              size={18}
              className="text-[#D4A574] dark:text-[#C89F6F]"
            />
            <h3 className="font-semibold text-[#8B4513] dark:text-[#C89F6F]">
              Delivery Address
            </h3>
          </div>
          <div className="text-sm text-[#2D2D2D] dark:text-[#E5E5E5] space-y-1 pl-6">
            <p>{address.line2}</p>
            <p>{address.line1}</p>
            <p>
              {address.city}, {address.state} - {address.postal_code}
            </p>
            <p>{address.country}</p>
            {address.phone && (
              <div className="flex items-center gap-2 pt-2">
                <Phone
                  size={14}
                  className="text-[#D4A574] dark:text-[#C89F6F]"
                />
                <p className="font-medium">{address.phone}</p>
              </div>
            )}
          </div>
        </div>

        {/* Status Update */}
        <div className="flex items-center justify-between pt-2 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
          <span className="text-sm font-medium text-[#6B6B6B] dark:text-[#A0A0A0]">
            Update Status:
          </span>
          <select
            value={status}
            onChange={handleStatusChange}
            disabled={loading}
            className="px-4 py-2 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all disabled:opacity-50"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {loading && (
          <p className="text-sm text-center text-[#D4A574] dark:text-[#C89F6F] font-medium">
            Updating...
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
