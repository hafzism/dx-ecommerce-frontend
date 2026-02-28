import React from 'react';
import { Package } from 'lucide-react';

const OrderCardSkeleton = () => {
    return (
        <div className="bg-white dark:bg-[#242424] rounded-xl shadow-lg p-6 animate-pulse">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                        <Package className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-20 rounded mb-1"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 w-32 rounded"></div>
                    </div>
                </div>
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>

            <hr className="border-[#D4A574]/20 dark:border-[#C89F6F]/20 mb-4" />

            {/* Customer Details */}
            <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm">
                    <div className="w-4 h-4 mt-0.5 bg-gray-200 dark:bg-gray-700 rounded shrink-0"></div>
                    <div className="flex-1">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 w-3/4 rounded mb-1"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 w-full rounded mb-1"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 w-2/3 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Items Summary */}
            <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-3 mb-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 w-24 rounded mb-3"></div>
                <div className="space-y-2">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex justify-between text-sm">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 w-2/3 rounded"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 w-8 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer / Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
                <div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 w-12 rounded mb-1"></div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 w-20 rounded"></div>
                </div>
                <div className="h-9 w-28 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            </div>
        </div>
    );
};

export default OrderCardSkeleton;
