import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data: user } = await axios.get("/users/me");
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
        setError(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async (formData) => {
    try {
      const { data } = await axios.post("/auth/login", formData);
      if (data) {
        const res = await axios.get("/users/me");
        setUser(res.data);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  const logout = async () => {
    const res = await axios.get("/auth/logout");
    if (res.data.message) {
      setUser(null);
      window.location.pathname = "/login";
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export const ProtectedRoute = (Component) => {
  return () => {
    const { user, loading } = useAuth();
    useEffect(() => {
      if (!user && !loading) {
        Router.push("/login");
      }
    }, [loading, user]);

    return <Component />;
  };
};
