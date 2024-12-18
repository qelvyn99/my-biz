import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Store the logged-in user in localStorage
      localStorage.setItem('loggedIn', JSON.stringify(user));
      console.log(user);
      navigate('/'); // Update with your desired route
    } else {
      // Display an error if the credentials are incorrect
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600">
      <div className="p-8 w-full max-w-md bg-white shadow-lg rounded-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Welcome back! Please login to continue.
        </p>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 shadow-sm"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full border-gray-300 rounded-lg p-3 focus:ring-green-500 focus:border-green-500 shadow-sm"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-green-500 hover:text-green-600 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
