import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/axios";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
 
const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/admin/categories");
        setCategories(res.data.result);
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  async function handleDelete(id) {
    try {
      if (!window.confirm("are you sure you want to delete this category?"))
        return;
      await api.delete(`/admin/categories/${id}`);
      setCategories(categories.filter((p) => p._id !== id));
    } catch (error) {
    console.log(error);
const msg = error.response?.data?.message || "Failed to delete category. Please try again.";
alert(msg);
  }
  }

if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <Navbar role="admin"></Navbar>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin - View Categories</h1>
        <div className="overflow-x-auto">
          <button
            onClick={() => navigate("/admin/category/create")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
          >
            + Add Category
          </button>
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((cat) => (
                  <tr key={cat._id} className="text-center">
                    <td className="border px-4 py-2">{cat.name}</td>
                    <td className="border px-4 py-2">{cat.description}</td>
                    <td className="border px-4 py-2 space-x-2">
                      <button
                        onClick={() =>
                          navigate(`/admin/categories/edit/${cat._id}`)
                        }
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(cat._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="px-4 py-4 text-center text-gray-500"
                    colSpan="6"
                  >
                    No categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminCategories;
