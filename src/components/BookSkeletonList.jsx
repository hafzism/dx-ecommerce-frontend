import React from 'react';

const BookSkeletonList = () => {
    return (
        <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl overflow-hidden shadow-md border border-transparent flex animate-pulse">
            {/* Image Skeleton */}
            <div className="bg-gray-200 dark:bg-gray-700 w-32 shrink-0 h-48"></div>

            {/* Details Skeleton */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    {/* Title */}
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>

                    {/* Author */}
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    {/* Price */}
                    <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                    {/* Button */}
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                </div>
            </div>
        </div>
    );
};

export default BookSkeletonList;
