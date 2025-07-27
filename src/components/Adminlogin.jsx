import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const adminlogin = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { login, isAdmin } = useAuth(); // get isAdmin here

  const handleClick = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (username === 'admin' && password === 'admin') {
      login();
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleContinueWithoutLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-center bg-cover px-4"
      style={{ backgroundImage: "url('/src/assets/img/adminbg.jpg')" }}
    >
      <div className="w-full max-w-sm bg-[#ffffff1f] backdrop-blur-xs rounded-xl border shadow-sm p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center mb-3">Admin Login</h2>
        <p className="text-sm text-white text-center">
          Enter your admin credentials to access the dashboard
        </p>

        <form className="space-y-4" onSubmit={handleClick}>
          <input
            required
            type="text"
            placeholder="Username"
            ref={usernameRef}
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
          <input
            required
            type="password"
            placeholder="Password"
            ref={passwordRef}
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Show this button only if isAdmin is true (cookie exists) */}
        {isAdmin && (
          <button
            onClick={handleContinueWithoutLogin}
            className="w-full mt-3 bg-green-600 text-white py-2 rounded-md text-sm font-medium hover:bg-green-700 transition"
          >
            Continue without login
          </button>
        )}
      </div>
    </div>
  );
};

export default adminlogin;
