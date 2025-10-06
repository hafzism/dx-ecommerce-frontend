import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/NavbarAdmin";
import Footer from "../../components/Footer";
import api from "../../services/axios";
import ProductItem from "../../components/ProductItem";

const Shop = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
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

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

<div className="min-w-60">
  <p className="my-2 text-xl flex items-center gap-2 font-semibold">
    CATEGORIES
  </p>

  <div className="flex flex-col gap-2">
    <Link
      to="/shop"
      className={`block text-center px-3 py-2 rounded-full border transition-all duration-200 text-sm sm:text-base ${
        !id
          ? "bg-blue-600 text-white border-blue-600"
          : "border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"
      }`}
    >
      All Categories
    </Link>

    {category.map((cat) => (
      <Link
        key={cat._id}
        to={`/shop/${cat._id}`}
        className={`block text-center px-3 py-2 rounded-full border transition-all duration-200 text-sm sm:text-base ${
          id === cat._id
            ? "bg-blue-600 text-white border-blue-600"
            : "border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"
        }`}
        title={cat.description}
      >
        {cat.name}
      </Link>
    ))}
  </div>
</div>


          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <div className="inline-flex gap-2 items-center mb-3">
                <p className="text-gray-500">
                  {id ? "CATEGORY" : "ALL"}{" "}
                  <span className="text-gray-700 font-medium">COLLECTIONS</span>
                </p>
                <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
              </div>
            </div>

            {products.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">
                No products found.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {products.map((p) => (
                  <ProductItem
                    key={p._id}
                    id={p._id}
                    image={p.image}
                    name={p.name}
                    price={p.price}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Shop;
