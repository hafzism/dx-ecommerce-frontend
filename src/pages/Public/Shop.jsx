import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import api from "../../services/axios";
import BookItem2 from "../../components/BookItem2";
import { Search, SlidersHorizontal, Grid3x3, List } from "lucide-react";
import OurPolicy from "../../components/OurPolicy";

const Shop = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const { id } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategory(res.data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = id ? `/categories/${id}` : "/products";
        const res = await api.get(endpoint);
        setProducts(res.data.products || res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, [id]);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.author && product.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get current category name
  const currentCategory = id 
    ? category.find(cat => cat._id === id)?.name 
    : "All Books";

  return (
    <>
      <Navbar />
      <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
              Book Collection
            </h1>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
              Browse through our extensive collection of books
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar - Categories */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-6 shadow-lg sticky top-24">
                
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] dark:text-[#A0A0A0]" />
                    <input
                      type="text"
                      placeholder="Search books..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
                    />
                  </div>
                </div>

                {/* Categories Header */}
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal size={20} className="text-[#D4A574] dark:text-[#C89F6F]" />
                  <h2 className="text-lg font-bold text-[#8B4513] dark:text-[#C89F6F]">
                    Categories
                  </h2>
                </div>

                {/* Category List */}
                <div className="space-y-2">
                  <Link
                    to="/shop"
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                      !id
                        ? "bg-[#D4A574] dark:bg-[#C89F6F] text-white shadow-md"
                        : "bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] hover:bg-[#D4A574] hover:text-white dark:hover:bg-[#C89F6F]"
                    }`}
                  >
                    All Categories
                  </Link>

                  {category.map((cat) => (
                    <Link
                      key={cat._id}
                      to={`/shop/${cat._id}`}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                        id === cat._id
                          ? "bg-[#D4A574] dark:bg-[#C89F6F] text-white shadow-md"
                          : "bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] hover:bg-[#D4A574] hover:text-white dark:hover:bg-[#C89F6F]"
                      }`}
                      title={cat.description}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              
              {/* Toolbar */}
              <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-4 mb-6 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
                    {currentCategory}
                  </h2>
                  <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'book' : 'books'} found
                  </p>
                </div>

                {/* View Toggle */}
                <div className="flex gap-2 bg-[#FAF8F5] dark:bg-[#1A1A1A] rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "grid"
                        ? "bg-[#D4A574] dark:bg-[#C89F6F] text-white"
                        : "text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#D4A574] dark:hover:text-[#C89F6F]"
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid3x3 size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "list"
                        ? "bg-[#D4A574] dark:bg-[#C89F6F] text-white"
                        : "text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#D4A574] dark:hover:text-[#C89F6F]"
                    }`}
                    aria-label="List view"
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>

              {/* Products Grid/List */}
              {filteredProducts.length === 0 ? (
                <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-12 text-center shadow-lg">
                  <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg">
                    {searchTerm ? `No books found matching "${searchTerm}"` : "No books available in this category."}
                  </p>
                </div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === "grid" 
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                    : "grid-cols-1"
                }`}>
                  {filteredProducts.map((product) => (
                    <BookItem2
                      key={product._id}
                      id={product._id}
                      image={product.image}
                      name={product.name}
                      author={product.author}
                      price={product.price}
                      viewMode={viewMode}
                    />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
      <OurPolicy></OurPolicy>
      <Footer />
    </>
  );
};

export default Shop;