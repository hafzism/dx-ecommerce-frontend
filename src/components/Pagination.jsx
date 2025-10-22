import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ userPerPage, totalUsers, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalUsers / userPerPage);
  const pages = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg transition-all ${
          currentPage === 1
            ? 'text-[#A0A0A0] cursor-not-allowed'
            : 'text-[#8B4513] dark:text-[#C89F6F] hover:bg-[#FAF8F5] dark:hover:bg-[#1A1A1A]'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currentPage === page
              ? 'bg-[#D4A574] dark:bg-[#C89F6F] text-white shadow-md'
              : 'text-[#2D2D2D] dark:text-[#E5E5E5] hover:bg-[#FAF8F5] dark:hover:bg-[#1A1A1A]'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg transition-all ${
          currentPage === totalPages
            ? 'text-[#A0A0A0] cursor-not-allowed'
            : 'text-[#8B4513] dark:text-[#C89F6F] hover:bg-[#FAF8F5] dark:hover:bg-[#1A1A1A]'
        }`}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;