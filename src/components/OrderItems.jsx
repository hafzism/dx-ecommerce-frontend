// import React from "react";

// const OrderItems = ({ items }) => {
//   return (
//     <div className="mb-4">
//       <h3 className="font-medium mb-2">Items</h3>
//       <ul className="space-y-2">
//         {items.map((item, i) => (
//           <li
//             key={i}
//             className="flex justify-between border p-2 rounded"
//           >
//             <span>
//               Product ID: {item.product_id} <br />
//               Qty: {item.quantity}
//             </span>
//             <span>₹{item.item_total}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderItems;


import React from "react";

const OrderItems = ({ items }) => {
  return (
    <div className="mb-4">
      <h3 className="font-medium mb-2">Items</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex justify-between border p-2 rounded bg-gray-50"
          >
            <div>
              <p className="font-semibold">{item.product_id?.name || "Unknown Product"}</p>
              <p className="text-sm text-gray-600">Unit Price: ₹{item.product_id?.price}</p>
              <p className="text-sm">Qty: {item.quantity}</p>
            </div>
            <div className="font-semibold">₹{item.item_total}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItems;
