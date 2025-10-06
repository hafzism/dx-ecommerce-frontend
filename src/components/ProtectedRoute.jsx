// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children, role,auth }) {
//   if (!auth) return <Navigate to="/login" />
//   if (role && auth.role !== role) return <Navigate to="/login" />;
//   return children;
// }


// export default ProtectedRoute


import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role, auth }) {
  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  if (role && auth.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
