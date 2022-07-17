/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function WrapInput(props) {
  return (
    <>
      <section className={`flex ${props.className}`}>{props.children}</section>
    </>
  );
}
