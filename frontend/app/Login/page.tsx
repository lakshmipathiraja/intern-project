"use client";
import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) => password.length >= 8;
  const validateConfirmPassword = () => password === confirmPassword;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-indigo-950 ">
      <div className="w-full max-w-md bg-zinc-300 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-36 h-36 rounded-full mb-4 bg-gray-800" style={{ backgroundImage: 'url(/images/logo.png)' }}>
            <i className={`fas ${isLogin ? 'fa-sign-in-alt' : 'fa-user-plus'} text-red-600 fa-lg`}></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
          <p className="text-gray-600 mt-2">{isLogin ? 'Please sign in to continue' : 'Get started with your account'}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name Field (only for Register) */}
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600"
                placeholder="John Doe"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600"
              placeholder="you@example.com"
            />
            {email && !validateEmail(email) && (
              <p className="mt-2 text-sm text-red-600">Please enter a valid email address</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600"
              placeholder="••••••••"
            />
            {password && !validatePassword(password) && (
              <p className="mt-2 text-sm text-red-600">Password must be at least 8 characters</p>
            )}
          </div>

          {/* Confirm Password Field (only for Register) */}
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600"
                placeholder="••••••••"
              />
              {confirmPassword && !validateConfirmPassword() && (
                <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 focus:ring-4 focus:ring-red-600 "
            disabled={
              loading ||
              !validateEmail(email) ||
              !validatePassword(password) ||
              (!isLogin && !validateConfirmPassword())
            }
          >
            {loading ? (
              <div className="flex justify-center">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="ml-2">Processing...</span>
              </div>
            ) : (
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
            )}
          </button>

          {/* Form Switch */}
          <p className="mt-6 text-center text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              type="button"
              className="ml-1 text-red-600 hover:text-red-700 font-semibold"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
