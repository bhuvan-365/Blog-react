import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'
import AdminLogin from './components/Adminlogin';
import AdminDashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute';


// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/home'
import Account from './components/account'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>


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
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
