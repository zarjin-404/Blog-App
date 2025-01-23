import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between">
        <h1 className="text-3xl text-white font-bold">
          <Link to="/">Blog</Link>
        </h1>
        <div className="flex items-center">
          <div className="space-x-4">
            <Link to="/profile">
              <i className="fas fa-user text-white text-2xl"></i>
            </Link>
          </div>

          <div className="space-x-4">
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
