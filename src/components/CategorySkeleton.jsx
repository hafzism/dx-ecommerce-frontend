import React from 'react';

const CategorySkeleton = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-lg animate-pulse h-64 bg-gray-200 dark:bg-gray-700">
            {/* Content Position Placeholder */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                {/* Title */}
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-1"></div>
                {/* Description line 1 */}
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                {/* Description line 2 */}
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>

                {/* Link Button */}
                <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mt-4"></div>
            </div>
        </div>
    );
};

export default CategorySkeleton;
