import React from 'react';
import { Trash2 } from 'lucide-react';

const CartItemSkeleton = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-0 animate-pulse">
            {/* Product Image Skeleton */}
            <div className="w-full sm:w-32 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg shrink-0"></div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start gap-4">
                        <div className="w-full">
                            {/* Title */}
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                            {/* Category */}
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-1"></div>
                            {/* Author */}
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                        </div>

                        {/* Delete Button Skeleton */}
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg shrink-0"></div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                    <div className="flex items-center gap-4">
                        {/* Price Skeleton */}
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>

                        {/* Quantity Selector Skeleton */}
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-28"></div>
                    </div>

                    {/* Item Total Skeleton */}
                    <div className="text-right w-full sm:w-auto">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-1 ml-auto"></div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 ml-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItemSkeleton;
