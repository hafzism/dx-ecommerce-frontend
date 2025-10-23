import { useEffect, useState } from "react";
import api from "../../services/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { Plus, Edit, Trash2, BookOpen, IndianRupee, Search } from "lucide-react";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/admin/products");
        setProducts(res.data.products || []);
        setFilteredProducts(res.data.products || []);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.author && product.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await api.delete(`/admin/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
      alert("Product deleted successfully");
    } catch (err) {
      alert("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#D4A574] border-t-transparent mx-auto mb-4"></div>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg">Loading products...</p>
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
                Product Management
              </h1>
              <p className="text-[#6B6B6B] dark:text-[#A0A0A0]">
                Manage your book inventory
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/products/create")}
              className="flex items-center gap-2 bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus size={20} />
              Add Product
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
                placeholder="Search by book name or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[#D4A574] dark:border-[#C89F6F] rounded-lg bg-[#FAF8F5] dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#D4A574] dark:focus:ring-[#C89F6F] transition-all"
              />
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-[#D4A574] dark:bg-[#C89F6F]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Image</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Book Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Author</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Price</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4A574]/20 dark:divide-[#C89F6F]/20">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <tr
                        key={product._id}
                        className="hover:bg-[#FAF8F5] dark:hover:bg-[#1A1A1A] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <img
                            src={`${import.meta.env.VITE_API_URL}${product.image}`}
                            alt={product.name}
                            className="h-20 w-16 object-cover rounded-lg shadow-md"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/100x150/D4A574/FFFFFF?text=Book';
                            }}
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-semibold text-[#2D2D2D] dark:text-[#E5E5E5] mb-1">
                              {product.name}
                            </p>
                            <p className="text-sm text-[#6B6B6B] dark:text-[#A0A0A0] line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <BookOpen size={16} className="text-[#D4A574] dark:text-[#C89F6F]" />
                            <span className="text-sm text-[#2D2D2D] dark:text-[#E5E5E5]">
                              {product.author || "N/A"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-3 py-1 bg-[#D4A574]/20 dark:bg-[#C89F6F]/20 text-[#8B4513] dark:text-[#C89F6F] rounded-full text-sm font-medium">
                            {product.category?.name || "No Category"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 font-bold text-[#8B4513] dark:text-[#C89F6F] text-lg">
                            <IndianRupee size={18} />
                            <span>{product.price}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => navigate(`/admin/products/edit/${product._id}`)}
                              className="flex items-center gap-1 bg-blue-500 dark:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-all"
                            >
                              <Edit size={16} />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className="flex items-center gap-1 bg-red-500 dark:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-600 dark:hover:bg-red-700 transition-all"
                            >
                              <Trash2 size={16} />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="px-6 py-12 text-center text-[#6B6B6B] dark:text-[#A0A0A0]"
                        colSpan="6"
                      >
                        {searchTerm ? `No products found matching "${searchTerm}"` : "No products found"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminProducts;