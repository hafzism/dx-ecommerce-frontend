import React, { useEffect, useState } from "react";
import api from "../services/axios";
import BookItem from "./BookItem";

const LatestCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log("network error");
      }
    }
    fetchData();
  }, []);

  const latestBooks = products.slice(0, 4);

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
              Newly Launched
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B6B6B] dark:text-[#A0A0A0] max-w-2xl mx-auto">
            Discover our latest arrivals! Fresh releases from your favorite authors and exciting new voices in literature.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latestBooks.map((book) => (
            <BookItem
              key={book._id}
              id={book._id}
              image={book.image}
              name={book.name}
              author={book.author}
              price={book.price}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/shop"
            className="inline-block bg-[#D4A574] dark:bg-[#C89F6F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Books
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;