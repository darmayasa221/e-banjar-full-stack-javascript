import React from 'react';

export default function Wraper(props) {
  return (
    <>
      <div className={`${props.className} `}>
        {props.children}
      </div>
    </>
  );
}
