import React, { useEffect, useState } from "react";
import api from "../services/axios";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const [products, setProducts] = useState([])


  useEffect(()=>{
    async function fetchData() {
try {
        const res = await api.get("/products")
        setProducts(res.data)
} catch (error) {
  console.log("network error");
  
}
    }
    fetchData()
  },[])

  const latestP = products.slice(0,8)
  
  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">


          <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-500">
              {" "}
              LATEST
              <span className="text-gray-700 font-medium"> COLLECTIONS</span>
            </p>
            <p className="w-8 h-[1px] bg-gray-700"></p>
          </div>

<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
Discover what’s new this season! From everyday essentials to statement styles, our latest collection has something special for everyone.
</p>


        </div>

        <div className="grid grid-cols-4 gap-5 gap-y-4">
          {
            latestP.map((p,i)=>(
              <ProductItem key={i} 
              id={p._id} image={p.image} name={p.name} price={p.price}
              >

              </ProductItem> 
            ))
          }
        </div>
      </div>
    </>
  );
};

export default LatestCollection;
