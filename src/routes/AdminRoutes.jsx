import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../pages/Admin/AdminHome'
import AdminProducts from '../pages/Admin/AdminProducts'
import CreateProduct from '../pages/Admin/CreateProduct'
import EditProduct from '../pages/Admin/EditProduct'
import AdminCategories from '../pages/Admin/AdminCategories'
import AdminCategoryEdit from '../pages/Admin/AdminCategoryEdit'
import AdminAddCategory from '../pages/Admin/AdminAddCategory'
import UsersList from '../pages/Admin/UsersList'
import AdminOrders from '../pages/Admin/AdminOrders'
import NotFound from '../pages/Public/NotFound'
import { useAuth } from '../context/AuthContext'

export default function AdminRoutes() {
  const { auth, loading } = useAuth();


  if (loading) return <Loader />;
  
  return (
     <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="products" element={<AdminProducts />} />
      <Route path="products/create" element={<CreateProduct />} />
      <Route path="products/edit/:id" element={<EditProduct />} />
      <Route path="categories" element={<AdminCategories />} />
      <Route path="categories/edit/:id" element={<AdminCategoryEdit />} />
      <Route path="category/create" element={<AdminAddCategory />} />
      <Route path="users" element={<UsersList />} />
      <Route path="orders" element={<AdminOrders />} />
      <Route path="*" element={<NotFound auth={auth} />} />
    </Routes>
  )
}
