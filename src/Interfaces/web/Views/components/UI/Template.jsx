/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Template(props) {
  return (
    <>
      <div className="w-screen h-screen flex flex-col ">{props.children}</div>
    </>
  );
}
