import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import heroimg from "../assets/hero_img.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <div className="absolute inset-0 z-0">
        <img
          src={heroimg}
          alt="Books Background"
          className="w-full h-full object-cover opacity-40 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#FAF8F5]/90 via-[#FAF8F5]/50 to-[#D4A574]/20 dark:from-[#1A1A1A]/80 dark:via-[#1A1A1A]/50 dark:to-[#C89F6F]/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 min-h-120">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#8B4513] dark:text-[#C89F6F] leading-tight">
              Welcome to{" "}
              <span className="text-[#D4A574] dark:text-[#A0653F]">Litbay</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#6B6B6B] dark:text-[#A0A0A0] max-w-2xl mx-auto">
              Your literary journey begins here. Discover timeless classics,
              bestselling novels, and hidden gems.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-16 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
            <BookOpen
              size={20}
              className="text-[#D4A574] dark:text-[#C89F6F]"
            />
            <div className="h-[2px] w-16 bg-[#D4A574] dark:bg-[#C89F6F]"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-[#2D2D2D] dark:text-[#E5E5E5] font-medium">
            Explore thousands of books across all genres
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/shop"
              className="group flex items-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Books
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/login"
              className="group flex items-center gap-2 bg-[#8B4513] dark:bg-[#A0653F] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6D3410] dark:hover:bg-[#8B4513] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Login
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
