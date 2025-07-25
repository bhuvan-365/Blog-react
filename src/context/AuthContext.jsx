import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get('admin-token');
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  const login = () => {
    setIsAdmin(true);
    Cookies.set('admin-token', 'secure-auth-token', { expires: 1 / 24 }); // 1 hour expiry
  };

  const logout = () => {
    setIsAdmin(false);
    Cookies.remove('admin-token');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
