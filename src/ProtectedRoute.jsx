import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '/src/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
