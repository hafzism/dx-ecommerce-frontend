import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios";
// import { useAuth } from "./useAuth";

export function useLogin(endpoint, redirectPath) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const { setAuth } = useAuth(); 
    
  const login = async (email, password) => {
    setError("");
    try {
      const res = await api.post(endpoint, { uname: email, pword: password });
      // setAuth({ user: res.data.user, role: res.data.role });
      console.log("Login success:", res.data);
 
      navigate(redirectPath, { replace: true });
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Login failed");
      } else {
        setError("Network error");
      }
    }
  };

  return { login, error };
}
