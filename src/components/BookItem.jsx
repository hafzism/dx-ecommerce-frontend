import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const BookItem = ({ id, image, name, author, price }) => {
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

export default BookItem;