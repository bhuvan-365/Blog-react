import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home'
import Account from './components/account'

function App() {

  return (
    <>
      

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
