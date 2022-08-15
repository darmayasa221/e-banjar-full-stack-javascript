import React from 'react';

export default function WrapMain(props) {
  return (
    <>
      <div className={`h-full ${props.className}`}>
        {props.children}
      </div>
    </>
  );
}
