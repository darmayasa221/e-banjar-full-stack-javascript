import React from 'react';
import { Route, Routes } from 'react-router-dom';
import container from '../../container';
import './assets/style.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

export default function Controllers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register container={container} />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
