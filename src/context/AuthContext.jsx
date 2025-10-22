import { createContext, useContext, useState, useEffect } from 'react';
import { checkAuth } from '../services/checkAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshAuth = async () => {
    try {
      const data = await checkAuth();
      if (data.isAuthenticated) {
        setAuth({ 
          user: data.user, 
          role: data.role,
          username: data.username || data.email || "User"
        });
      } else {
        setAuth(null);
      }
    } catch (err) {
      console.error("Auth refresh failed:", err);
      setAuth(null);
    }
  };

  useEffect(() => {
    async function verify() {
      await refreshAuth();
      setLoading(false);
    }
    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}