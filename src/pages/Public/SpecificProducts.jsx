import React, { useEffect, useState } from 'react'
import OneProductDetails from '../../components/OneProductDetails'
import Navbar from '../../components/NavbarAdmin'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import api from '../../services/axios'
import LatestCollection from '../../components/LatestCollection'
import ExploreCategories from '../../components/ExploreCategories'

export default function SpecificProducts() {
    const {id} = useParams()
     const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get(`/products/${id}`)
        console.log(res);
        
        setProduct(res.data);
      } catch (err) {
          setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
        
      }
    };
    fetchProduct();
  }, [id]);

  
  if (loading) return <div className="p-6">Loading product...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <>
    <Navbar></Navbar>
    <div  className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <OneProductDetails _id={product._id} name={product.name} image={product.image} price={product.price} description={product.description} category={product.category.name} catdesc={product.category.description}/>
        <LatestCollection></LatestCollection>
        <ExploreCategories></ExploreCategories>
    <Footer></Footer>
    </div>
    </>

  )
}
