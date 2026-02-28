import React from 'react';

const TableRowSkeleton = () => {
    return (
        <tr className="animate-pulse bg-[#FFFFFF] dark:bg-[#242424]">
            {/* Image Skeleton */}
            <td className="px-6 py-4">
                <div className="h-20 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            </td>
            {/* Book Details Skeleton */}
            <td className="px-6 py-4">
                <div>
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
            </td>
            {/* Author Skeleton */}
            <td className="px-6 py-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            </td>
            {/* Category Skeleton */}
            <td className="px-6 py-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
            </td>
            {/* Price Skeleton */}
            <td className="px-6 py-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            </td>
            {/* Actions Skeleton */}
            <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                    <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg w-16"></div>
                    <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg w-20"></div>
                </div>
            </td>
        </tr>
    );
};

export default TableRowSkeleton;
