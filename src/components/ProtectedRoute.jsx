import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role,auth }) {
  if (!auth) return <Navigate to="/login" />
  if (role && auth.role !== role) return <Navigate to="/notauth" />;
  return children;
}

 
export default ProtectedRoute