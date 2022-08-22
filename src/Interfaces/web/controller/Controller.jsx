import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import Dashboard from '../views/Dashboard/Dashboard';
import Profile from '../components/Menu/Profile';
import Activities from '../components/Menu/Activities';
import ActivityDetail from '../components/Template/ActivityDetail';
import Peoples from '../components/Menu/Peoples';

export default function Controller() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="kegiatan" element={<Activities />} />
        <Route path="kegiatan/:title" element={<ActivityDetail />} />
        <Route path="masyarakat" element={<Peoples />} />
      </Route>
    </Routes>
  );
}
