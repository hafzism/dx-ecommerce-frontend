import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const BookItem2 = ({ id, image, name, author, price, viewMode = "grid" }) => {
  // List view layout
  if (viewMode === "list") {
    return (
      <Link 
        to={`/product/${id}`}
        className="group bg-[#FFFFFF] dark:bg-[#242424] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#D4A574] dark:hover:border-[#C89F6F] flex"
      >
        {/* Book Cover Image - Smaller in list view */}
        <div className="relative overflow-hidden bg-[#FAF8F5] dark:bg-[#1A1A1A] w-32 shrink-0">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={`${import.meta.env.VITE_API_URL}${image}`}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150x200/D4A574/FFFFFF?text=Book';
            }}
          />
        </div>

        {/* Book Details - Horizontal layout */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-[#2D2D2D] dark:text-[#E5E5E5] font-semibold text-lg mb-1 group-hover:text-[#D4A574] dark:group-hover:text-[#C89F6F] transition-colors">
              {name}
            </h3>
            
            {author && (
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-sm mb-2">
                by {author}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#8B4513] dark:text-[#C89F6F] font-bold text-xl">
              ₹{price}
            </p>
            <button className="bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-colors">
              View Details
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // Grid view layout (default)
  return (
    <Link 
      to={`/product/${id}`}
      className="group bg-[#FFFFFF] dark:bg-[#242424] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#D4A574] dark:hover:border-[#C89F6F]"
    >
      {/* Book Cover Image */}
      <div className="relative overflow-hidden bg-[#FAF8F5] dark:bg-[#1A1A1A] h-72 flex items-center justify-center">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={`${import.meta.env.VITE_API_URL}${image}`}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400/D4A574/FFFFFF?text=Book+Cover';
          }}
        />
        

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-[#8B4513]/90 dark:bg-[#C89F6F]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <BookOpen size={32} className="mx-auto mb-2" />
            <p className="font-semibold">Quick View</p>
          </div>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-4">
        <h3 className="text-[#2D2D2D] dark:text-[#E5E5E5] font-semibold text-base mb-1 line-clamp-2 group-hover:text-[#D4A574] dark:group-hover:text-[#C89F6F] transition-colors">
          {name}
        </h3>
        
        {author && (
          <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-sm mb-3 line-clamp-1">
            by {author}
          </p>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
          <p className="text-[#8B4513] dark:text-[#C89F6F] font-bold text-lg">
            ₹{price}
          </p>
          <button className="bg-[#D4A574] dark:bg-[#C89F6F] text-white px-4 py-1 rounded-lg text-sm font-medium hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-colors">
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookItem2;