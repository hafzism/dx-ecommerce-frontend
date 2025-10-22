import React from "react";
import { Package, IndianRupee } from "lucide-react";

const OrderItems = ({ items }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Package size={18} className="text-[#D4A574] dark:text-[#C89F6F]" />
        <h3 className="font-semibold text-[#8B4513] dark:text-[#C89F6F]">
          Order Items ({items.length})
        </h3>
      </div>
      
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-start bg-[#FAF8F5] dark:bg-[#1A1A1A] p-3 rounded-lg border border-[#D4A574]/20 dark:border-[#C89F6F]/20"
          >
            <div className="flex-1">
              <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] mb-1">
                {item.product_id?.name || "Unknown Product"}
              </p>
              <div className="flex items-center gap-3 text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                <div className="flex items-center gap-1">
                  <IndianRupee size={12} />
                  <span>{item.product_id?.price} × {item.quantity}</span>
                </div>
                <span className="text-xs px-2 py-1 bg-[#D4A574]/20 dark:bg-[#C89F6F]/20 rounded">
                  Qty: {item.quantity}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 font-bold text-[#8B4513] dark:text-[#C89F6F] text-lg">
              <IndianRupee size={18} />
              <span>{item.item_total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItems;