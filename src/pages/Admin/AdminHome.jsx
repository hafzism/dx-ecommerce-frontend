import React, { useEffect, useState } from 'react'
import NavbarAdmin from '../../components/NavbarAdmin'
import Footer from '../../components/Footer'
import api from '../../services/axios'
import { useNavigate } from 'react-router-dom'

const AdminHome = () => {

const [counts,setCounts] = useState({})
const navigate = useNavigate()

useEffect(()=>{
  async function fetchData() {
    const res = await api.get('admin/loadhome')
    setCounts(res.data)
    
  }
fetchData()
},[])

  return (
    <>
    <div className='overflow-hidden'>
    <NavbarAdmin role='admin'></NavbarAdmin>
 <div className="w-screen min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-gray-50 ">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 pb-10">
            Welcome Back, Admin
          </h1>
          <h2 className="text-lg text-gray-500 mt-4">
            Manage your store efficiently with the dashboard below
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">

          <div onClick={()=> navigate("/admin/users")}
          className="cursor-pointer bg-white shadow-md hover:scale-105 transition-all duration-150  rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Users</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{counts.userCount}</p>
          </div>
          
          <div onClick={()=> navigate("/admin/products")}
          className="cursor-pointer bg-white shadow-md hover:scale-105 transition-all duration-150  rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Products</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{counts.productCount}</p>
          </div>
          <div onClick={()=> navigate("/admin/orders")}
          className="cursor-pointer bg-white shadow-md hover:scale-105 transition-all duration-150  rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Orders</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">{counts.orderCount}</p>
          </div>
         <div onClick={()=> navigate("/admin/categories")}
          className="cursor-pointer bg-white shadow-md hover:scale-105 transition-all duration-150  rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Categories</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">{counts.categoryCount}</p>
          </div>
        </div>
      </div>
    <Footer></Footer>
    </div>
    </>
  )
}


export default AdminHome
