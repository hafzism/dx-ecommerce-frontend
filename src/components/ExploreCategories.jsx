import React, { useEffect, useState } from "react";
import api from "../services/axios";
import CategoryCard from "./CategoryCard";

const ExploreCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
      } catch (error) {
        console.log("Failed to fetch categories");
      }
    }
    fetchData();
  }, []);

  const sixCat = categories.slice(0, 6);

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#242424] py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-3">
            Popular Genres
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] dark:text-[#A0A0A0] max-w-2xl mx-auto">
            Browse our most-loved genres — from gripping fiction and thrilling detective stories to fascinating science and inspiring non-fiction.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sixCat.map((cat) => (
            <CategoryCard key={cat._id} {...cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;