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
    const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000); // 1 hour ahead
    Cookies.set('admin-token', 'secure-auth-token', { expires: oneHourFromNow });
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
