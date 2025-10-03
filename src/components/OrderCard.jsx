// import React from "react";
// import OrderItems from "./OrderItems";

// const OrderCard = ({ order }) => {
//   return (
//     <div className="border rounded-lg shadow p-4 bg-white">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <p className="font-semibold">
//             User: {order.user_id?.username || "Unknown"}
//           </p>
//           <p className="text-sm text-gray-500">{order.user_id?.email}</p>
//         </div>
//         <div className="text-right">
//           <p className="font-semibold">₹{order.total_price}</p>
//           <p className="text-sm text-gray-500">
//             {new Date(order.createdAt).toLocaleString()}
//           </p>
//         </div>
//       </div>

//       {/* Items */}
//       <OrderItems items={order.items} />

//       {/* Footer */}
//       <div className="flex justify-between items-center mt-4">
//         <span>
//           <strong>Status:</strong> {order.status}
//         </span>
//         <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
//           Update Status
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;




import React, { useState } from "react";
import OrderItems from "./OrderItems";
import api from "../services/axios";

const OrderCard = ({ order, onStatusUpdate })  => {
    const [status, setStatus] = useState(order.status);
  const [loading, setLoading] = useState(false);

   const statuses = ["pending", "shipped", "delivered", "cancelled"];
   
     async function handleStatusChange(e) {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setLoading(true);

    try {
      const res = await api.put(`/admin/orders/${order._id}`, {
        status: newStatus,
      });
      if (onStatusUpdate) onStatusUpdate(res.data.updated);
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
      setStatus(order.status); // rollback if failed
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="font-semibold">
            User: {order.user_id?.username || "Unknown"}
          </p>
          <p className="text-sm text-gray-500">{order.user_id?.email}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">₹{order.total_price}</p>
          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Items */}
      <OrderItems items={order.items} />

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <span>
          <strong>Status:</strong> {order.status}
          <select
            value={status}
            onChange={handleStatusChange}
            className="ml-2 border px-2 py-1 rounded"
            disabled={loading}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
              </span>
        {loading && (
          <span className="text-sm text-gray-500 ml-2">Updating...</span>
        )}
      </div>
    </div>
  );
};

export default OrderCard;