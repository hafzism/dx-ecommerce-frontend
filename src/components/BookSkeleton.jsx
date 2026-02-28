import React from 'react';

const BookSkeleton = () => {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gray-200 dark:bg-gray-700 h-72 w-full"></div>
      
      {/* Details Skeleton */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        
        {/* Author */}
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        
        {/* Price & Button Container */}
        <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
          {/* Price */}
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          {/* Button */}
          <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default BookSkeleton;
