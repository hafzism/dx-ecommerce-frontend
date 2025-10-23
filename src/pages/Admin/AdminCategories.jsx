import React, { useEffect, useState } from "react";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Plus, Edit, Trash2, Layers, Search } from "lucide-react";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/admin/categories");
        setCategories(res.data.result);
        setFilteredCategories(res.data.result);
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const filtered = categories.filter((cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchTerm, categories]);

  async function handleDelete(id) {
    try {
      if (!window.confirm("Are you sure you want to delete this category?"))
        return;
      await api.delete(`/admin/categories/${id}`);
      setCategories(categories.filter((p) => p._id !== id));
      alert("Category deleted successfully");
    } catch (error) {
      console.log(error);
      const msg = error.response?.data?.message || "Failed to delete category. Please try again.";
      alert(msg);
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#D4A574] border-t-transparent mx-auto mb-4"></div>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg">Loading categories...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Category Management
              </h1>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                Organize your book collection
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/category/create")}
              className="flex items-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus size={20} />
              Add Category
            </button>
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Search Bar */}
          <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-4 mb-6 shadow-lg">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] dark:text-[#A0A0A0]" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
              />
            </div>
          </div>

          {/* Categories Grid */}
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((cat) => (
                <div
                  key={cat._id}
                  className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#D4A574] dark:hover:border-[#C89F6F] hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#D4A574] dark:bg-[#C89F6F] rounded-lg">
                      <Layers size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#8B4513] dark:text-[#C89F6F]">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-sm mb-6 line-clamp-3">
                    {cat.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-[#D4A574]/20 dark:border-[#C89F6F]/20">
                    <button
                      onClick={() => navigate(`/admin/categories/edit/${cat._id}`)}
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-all"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cat._id)}
                      className="flex-1 flex items-center justify-center gap-1 bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 dark:hover:bg-red-700 transition-all"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-12 text-center shadow-lg">
              <Layers size={48} className="mx-auto mb-4 text-[#6B6B6B] dark:text-[#A0A0A0]" />
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg">
                {searchTerm ? `No categories found matching "${searchTerm}"` : "No categories found"}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminCategories;