import React from 'react';
import container from '../../container';
import './assets/style.css';
// import Home from '../Interfaces/UI/Pages/Home/Home';
import Register from './Register/Register';

export default function Controllers() {
  return (
    <>
      {/* <Home /> */}
      <Register container={container} />
    </>
  );
}
