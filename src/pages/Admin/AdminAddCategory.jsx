import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/axios';
import Navbar from '../../components/NavbarAdmin';
import Footer from '../../components/Footer';
import { Layers, Save, X } from 'lucide-react';

const AdminAddCategory = () => {
  const [form, setForm] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('admin/categories', form);
      alert("New category created successfully!");
      navigate("/admin/categories");
    } catch (error) {
      console.log(error);
      alert("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] min-h-screen transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Create Category
              </h1>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                Add a new book category
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/categories")}
              className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#D4A574] dark:hover:text-[#C89F6F] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
            
            {/* Icon Display */}
            <div className="flex justify-center">
              <div className="p-6 bg-linear-to-br from-[#D4A574] to-[#C89F6F] rounded-full">
                <Layers size={48} className="text-white" />
              </div>
            </div>

            {/* Category Name */}
            <div>
              <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Category Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g., Fiction, Mystery, Romance"
                className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe this category..."
                rows="5"
                className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all resize-none"
                required
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={20} />
                {loading ? "Creating..." : "Create Category"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/categories")}
                className="px-6 py-3 border border-[#D4A574] dark:border-[#C89F6F] text-[#8B4513] dark:text-[#C89F6F] rounded-lg font-semibold hover:bg-[#FAF8F5] dark:hover:bg-[#1A1A1A] transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminAddCategory;