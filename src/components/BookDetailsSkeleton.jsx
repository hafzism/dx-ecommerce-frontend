import React from 'react';

const BookDetailsSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-pulse">

            {/* Breadcrumb Skeleton */}
            <div className="mb-6 flex gap-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                <div className="h-4 text-gray-200 dark:text-gray-700">/</div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                <div className="h-4 text-gray-200 dark:text-gray-700">/</div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">

                {/* Left: Book Image Skeleton */}
                <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-2xl p-6 shadow-lg">
                    <div className="w-full h-96 sm:h-[500px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                </div>

                {/* Right: Book Info Skeleton */}
                <div className="flex flex-col gap-6 w-full">

                    {/* Title & Author */}
                    <div>
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                    </div>

                    {/* Category */}
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>

                    {/* Price */}
                    <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-xl p-6 border-2 border-transparent">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12 mb-2"></div>
                        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                    </div>

                    {/* Description */}
                    <div>
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
                        <div className="flex flex-col gap-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-6 shadow-lg">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {/* Quantity Selector Skeleton */}
                            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-32 shrink-0"></div>
                            {/* Button Skeleton */}
                            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded flex-1 w-full sm:w-auto"></div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-start gap-3 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-4">
                                <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded shrink-0"></div>
                                <div className="w-full">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-1"></div>
                                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailsSkeleton;
