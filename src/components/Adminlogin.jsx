// src/components/AdminLogin.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuth(); // make sure `login` exists in your context

  const handleClick = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (username === 'admin' && password === 'admin') {
      login(); // this should set isAdmin = true in context
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl border shadow-sm p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-center mb-3">Admin Login</h2>
            <p className="text-sm text-gray-500">
              Enter your admin credentials to access the dashboard
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleClick}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
            required
              id="username"
              type="text"
              placeholder="Username"
              ref={usernameRef}
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
            required
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
