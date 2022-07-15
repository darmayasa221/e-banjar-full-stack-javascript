/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function WrapMain(props) {
  return (
    <>
      <div className={`conatiner h-screen flex ${props.className}`}>
        {props.children}
      </div>
    </>
  );
}
