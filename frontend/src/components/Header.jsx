import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const logout = () => {
    axios.get('http://localhost:5000/api/user/logout', {
      withCredentials: true,
    });
    navigate('/');
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between">
        <h1 className="text-3xl text-white font-bold">
          <Link to="/">Blog</Link>
        </h1>
        <div className="flex items-center">
          <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>

          <div className="">
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </Link>

            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
