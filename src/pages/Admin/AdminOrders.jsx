import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import OrderCard from "../../components/OrderCard";
import Footer from "../../components/Footer";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchOrders() {
    try {
      const res = await api.get("/admin/orders");
      setOrders(res.data.orders);
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

    function handleStatusUpdate(updatedOrder) {
    setOrders((prev) =>
      prev.map((o) => (o._id === updatedOrder._id ? updatedOrder : o))
    );
  }


  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <Navbar role="admin" />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin - Orders</h1>
        {orders.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
                onStatusUpdate={handleStatusUpdate}
              />
            ))}
          </div>
          // ))
        ) : (
          <p className="text-gray-500">No orders found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminOrders;
