import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.get('http://localhost:5000/api/user/logout');
      localStorage.clear('token');
      navigate('/');
    } catch (error) {
      navigate('/api/user/register');
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
