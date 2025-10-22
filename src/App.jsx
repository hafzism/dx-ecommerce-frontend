import { useEffect } from "react";
import RegisterPage from "./pages/Public/RegisterPage";
import { Routes, Route } from "react-router-dom";
import UserHome from "./pages/Users/UserHome";
import AdminLoginPage from "./pages/Admin/AdminLoginPage";
import AdminHome from "./pages/Admin/AdminHome";
import ProtectedRoute from "./components/ProtectedRoute";
import UserLoginPage from "./pages/Public/UserLoginPage";
import AdminProducts from "./pages/Admin/AdminProducts";
import NotFound from "./pages/Public/NotFound";
import Loader from "./pages/Public/Loader";
import PublicHome from "./pages/Public/PublicHome";
import Shop from "./pages/Public/Shop";
import SpecificProducts from "./pages/Public/SpecificProducts";
import PublicRoute from "./components/PublicRoute";
import ViewCart from "./pages/Users/CartPage";
import AdminRoutes from "./routes/AdminRoutes";
import CheckOut from "./pages/Users/CheckOut"; 
import OrderSuccess from "./pages/Users/OrderSuccess";
import UserOrders from "./pages/Users/UserOrders";
import OrderDetails from "./pages/Users/OrderDetails";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppRoutes() {
  const { auth, loading } = useAuth();
  
  useEffect(() => {
    const theme = localStorage.getItem('litbay-theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<PublicHome />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<Shop />} />
      <Route path="/product/:id" element={<SpecificProducts />} />

      {/* Auth routes */}
      <Route
        path="/login"
        element={
          <PublicRoute auth={auth}>
            <UserLoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute auth={auth}>
            <RegisterPage />
          </PublicRoute>
        }
      />
      
      <Route
        path="/admin/login"
        element={
          <PublicRoute auth={auth}>
            <AdminLoginPage />
          </PublicRoute>
        }
      />

      {/* User routes */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute role="user" auth={auth}>
            <ViewCart />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/placeorder"
        element={
          <ProtectedRoute role="user" auth={auth}>
            <CheckOut />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/orders"
        element={
          <ProtectedRoute role="user" auth={auth}>
            <UserOrders />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute role="user" auth={auth}>
            <OrderDetails />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="/order-success"
        element={
          <ProtectedRoute role="user" auth={auth}>
            <OrderSuccess />
          </ProtectedRoute>
        }
      />

      {/* Admin routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute role="admin" auth={auth}>
            <AdminRoutes />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound auth={auth} />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;