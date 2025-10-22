import React, { useEffect, useState } from "react";
import api from "../services/axios";

const useCart = () => {

  const [cart, setCart] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/carts");
        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return cart
};

export default useCart;