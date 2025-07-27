
import Navbar from './components/navbar';
import './App.css';
import AdminLogin from './components/adminlogin'; 
import Dashboard from './components/Dashboard'; 
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Account from './components/account';
import Blogpost from './components/blogpost';

import { AuthProvider } from './context/AuthContext'; 


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







