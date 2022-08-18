import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import Dashboard from '../views/Dashboard/Dashboard';

export default function Controller() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}
