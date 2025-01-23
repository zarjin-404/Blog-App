import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import Profile from './components/Profile.jsx';
import IsLogeding from './components/isLogeding.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <IsLogeding>
            <Profile />
          </IsLogeding>
        }
      />
    </Routes>
  </BrowserRouter>
);
