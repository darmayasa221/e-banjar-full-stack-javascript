import React from 'react';
import Header from './components/Header/Header';
import './assets/style.css';
import cat from './assets/images/images.jpeg';

export default function Container() {
  return (
    <>
      <Header />
      <div className="container">
        <p className="text-blue-700">hello world</p>
        <img src={cat} alt="" srcSet="" />
      </div>
    </>
  );
}
