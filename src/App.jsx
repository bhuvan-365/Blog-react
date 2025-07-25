import { useState , useEffect} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/navbar';
import './App.css';
import AdminLogin from './components/AdminLogin'; 
import Dashboard from './components/Dashboard'; 
import ProtectedRoute from './ProtectedRoute';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Account from './components/account';
import Blogpost from './components/blogpost';

import { AuthProvider } from './context/AuthContext'; 


function App() {

    useEffect(() => {
    alert(' first interface is of public user , for admin , put /admin on website url , then enter admin , admin login to dashboard from where admin added blog which store in localstorage and in home page added blog will be available , and unlessadmin log out from dashbord cookie available which mean youcan straight log in in adminlogin page for 1hr ');
  }, []);

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







