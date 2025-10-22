import React, { useEffect, useState } from 'react';
import BookDetails from '../../components/BookDetails';
import Navbar from '../../components/NavbarAdmin';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import api from '../../services/axios';
import LatestCollection from '../../components/LatestCollection';
import ExploreCategories from '../../components/ExploreCategories';

export default function SpecificProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#D4A574] border-t-transparent mx-auto mb-4"></div>
            <p className="text-[#6B6B6B] dark:text-[#A0A0A0] text-lg">Loading book details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#1A1A1A] flex items-center justify-center px-4">
          <div className="bg-[#FFFFFF] dark:bg-[#242424] rounded-xl p-8 shadow-lg text-center max-w-md">
            <p className="text-red-500 dark:text-red-400 text-lg mb-4">Sorry! Some kind of Error happened.({error})</p>
            <a
              href="/shop"
              className="inline-block bg-[#D4A574] dark:bg-[#C89F6F] text-white px-6 py-2 rounded-lg hover:bg-[#C89F6F] dark:hover:bg-[#D4A574] transition-all"
            >
              Back to Shop
            </a>
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
        <BookDetails
          _id={product._id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
          author={product.author}
          category={product.category.name}
          catdesc={product.category.description}
        />
        <LatestCollection />
        <ExploreCategories></ExploreCategories>
      </div>
      <Footer />
    </>
  );
}