import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";

const OrderDetails = () => {
  const { id } = useParams();
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

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!order) return <p className="text-center mt-10">Order not found</p>;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>

        <div className="border rounded-lg shadow p-4 bg-white mb-6">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ₹{order.total_price}</p>
          <p><strong>Placed on:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        </div>

        <div className="border rounded-lg shadow p-4 bg-white mb-6">
          <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
          <p>{order.address.line1}</p>
          <p>{order.address.line2}</p>
          <p>{order.address.city}, {order.address.state}, {order.address.postal_code}</p>
          <p>{order.address.country}</p>
          <p>Phone: {order.address.phone}</p>
        </div>

        <div className="border rounded-lg shadow p-4 bg-white">
          <h2 className="text-xl font-semibold mb-2">Items</h2>
          {order.items.map((item, idx) => (
            <div key={idx} className="flex justify-between border p-2 rounded bg-gray-50 mb-2">
              <div>
                <p className="font-semibold">{item.product_id?.name}</p>
                <p className="text-sm text-gray-600">Unit Price: ₹{item.price}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
              <div className="font-semibold">₹{item.item_total}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
 