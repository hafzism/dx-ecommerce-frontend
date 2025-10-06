import React, { useEffect, useState } from "react";
import api from "../services/axios";
import CategoryCard from "./CategoryCard";

const ExploreCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/categories");
      setCategories(res.data);
    }
    fetchData();
  }, []);

  const eightCat = categories.slice(0, 6);

  return (
    <div>
      <div className="text-center py-8 text-3xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            {" "}
            POPULAR
            <span className="text-gray-700 font-medium"> CATEGORIES</span>
          </p>
          <p className="w-8 h-[1px] bg-gray-700"></p>
        </div>

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our most-loved categories and find exactly what you’re looking
          for — from timeless basics to trendsetting pieces, all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat._id} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
