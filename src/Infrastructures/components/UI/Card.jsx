/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Card(props) {
  return (
    <div
      className={`shadow-2xl bg-white border border-gray-300 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
