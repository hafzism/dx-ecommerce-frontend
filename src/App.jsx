import { useEffect, useState } from "react";
import RegisterPage from "./pages/Public/RegisterPage";
import { Routes, Route } from "react-router-dom";
import UserHome from "./pages/Users/UserHome";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import AdminHome from "./pages/Admin/AdminHome";
import ProtectedRoute from "./components/ProtectedRoute";
import NotAuth from "./pages/Public/NotAuth";
import { checkAuth } from "./services/checkAuth";
import UserLoginPage from "./pages/Public/UserLoginPage";
import AdminProducts from "./pages/Admin/AdminProducts";
import NotFound from "./pages/Public/NotFound";
import Loader from "./pages/Public/Loader";
import CreateProduct from "./pages/Admin/CreateProduct";
import EditProduct from "./pages/Admin/EditProduct";
import AdminCategories from "./pages/Admin/AdminCategories";
import AdminCategoryEdit from "./pages/Admin/AdminCategoryEdit";
import AdminAddCategory from "./pages/Admin/AdminAddCategory";
import UsersList from "./pages/Admin/UsersList";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verify() {
      const data = await checkAuth();
      if (data.isAuthenticated) {
        setAuth({ user: data.user, role: data.role });
      } else {
        setAuth(null);
      }
      setLoading(false);
    }
    verify();
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/notauth" element={<NotAuth />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute role="user" auth={auth}>
            <UserHome />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin" auth={auth}>
            <AdminHome />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute role="admin" auth={auth}>
            <AdminProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/categories"
        element={
          <ProtectedRoute role="admin" auth={auth}>
            <AdminCategories />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/products/create" element={<CreateProduct />} />
      <Route path="/admin/products/edit/:id" element={<EditProduct />} />
      <Route path="/admin/categories/edit/:id" element={<AdminCategoryEdit />} />
      <Route path='/admin/category/create' element={<AdminAddCategory/>}/>
            <Route path='/admin/users' element={<UsersList/>}/>
            <Route path='/admin/orders' element={<AdminOrders/>}/>
      <Route path="*" element={<NotFound auth={auth} />} />
    </Routes>
  );
}

export default App;
