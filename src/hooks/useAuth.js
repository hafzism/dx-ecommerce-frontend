// import { useEffect, useState } from "react";
// import { checkAuth } from "../services/checkAuth";

// export function useAuth() {
//   const [auth, setAuth] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let isMounted = true;

//     async function verify() {
//       const data = await checkAuth();
//       if (!isMounted) return;

//       if (data.isAuthenticated) { 
//         setAuth({ user: data.user, role: data.role });
//       } else {
//         setAuth(null);
//       }
//       setLoading(false);
//     }

//     verify();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   return { auth, loading, setAuth };
// }