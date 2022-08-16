import React from 'react';

export default function Wraper(props) {
  return (
    <>
      <div className={`h-full ${props.className}`}>
        {props.children}
      </div>
    </>
  );
}
