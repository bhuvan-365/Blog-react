import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/navbar';
import './App.css';
import AdminLogin from './components/AdminLogin'; // note case fix if needed
import Dashboard from './components/Dashboard'; // use this one consistently
import ProtectedRoute from './ProtectedRoute';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Account from './components/account';
import Blogpost from './components/blogpost';

import { AuthProvider } from './context/AuthContext';  // import AuthProvider

function App() {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
           <Route path="/blogpost" element={<Blogpost />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App; 







