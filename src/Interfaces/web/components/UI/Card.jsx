import React from 'react';

export default function Card(props) {
  return (
    <div
      className={`${props.className} shadow-2xl bg-white border rounded border-gray-300`}
    >
      {props.children}
    </div>
  );
}
