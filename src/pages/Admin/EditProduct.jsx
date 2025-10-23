import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { BookOpen, Upload, Save, X } from "lucide-react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    author: "",
    category: "",
    price: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        const catRes = await api.get("/admin/categories");

        setForm({
          name: res.data.name,
          author: res.data.author,
          category: res.data.category?._id || "",
          price: res.data.price,
          description: res.data.description,
        });
        setCurrentImage(res.data.image);
        setCategories(catRes.data.result || []);
      } catch (err) {
        console.log(err);
        alert("Failed to load product");
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("author", form.author);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("description", form.description);
    if (image) formData.append("image", image);

    try {
      await api.put(`/admin/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product updated successfully");
      navigate("/admin/products");
    } catch (err) {
      alert("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#FAF8F5] dark:bg-[#1A1A1A] min-h-screen transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Edit Product
              </h1>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                Update book information
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/products")}
              className="flex items-center gap-2 text-[#6B6B6B] dark:text-[#A0A0A0] hover:text-[#D4A574] dark:hover:text-[#C89F6F] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
            
            {/* Book Name */}
            <div>
              <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Book Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter book title"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Author Name *
              </label>
              <div className="relative">
                <BookOpen size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] dark:text-[#A0A0A0]" />
                <input
                  type="text"
                  name="author"
                  placeholder="Enter author name"
                  value={form.author}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
                  required
                />
              </div>
            </div>

            {/* Category & Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter book description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all resize-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-[#8B4513] dark:text-[#C89F6F] mb-2">
                Book Cover Image
              </label>
              <div className="border-2 border-dashed border-[#D4A574] dark:border-[#C89F6F] rounded-lg p-6 text-center">
                {imagePreview || currentImage ? (
                  <div className="space-y-4">
                    <img
                      src={imagePreview || `${import.meta.env.VITE_API_URL}${currentImage}`}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-lg shadow-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setImagePreview(null);
                      }}
                      className="text-red-500 hover:text-red-600 text-sm font-medium"
                    >
                      {imagePreview ? "Remove New Image" : "Change Image"}
                    </button>
                  </div>
                ) : (
                  <div>
                    <Upload size={48} className="mx-auto mb-4 text-[#D4A574] dark:text-[#C89F6F]" />
                    <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-[#A0A0A0]">PNG, JPG, JPEG (max 5MB)</p>
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                {!imagePreview && (
                  <label
                    htmlFor="image-upload"
                    className="inline-block mt-4 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-2 rounded-lg font-medium cursor-pointer hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all"
                  >
                    {currentImage ? "Change Image" : "Choose File"}
                  </label>
                )}
              </div>
              <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] mt-2">
                Leave empty to keep the current image
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={20} />
                {loading ? "Updating..." : "Update Product"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/products")}
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
}

export default EditProduct;