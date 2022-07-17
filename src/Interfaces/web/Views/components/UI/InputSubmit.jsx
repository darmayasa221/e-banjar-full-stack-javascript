/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function InputSubmit(props) {
  return (
    <>
      <label
        className={`${
          props.lableClassName === 'hidden' ? props.lableClassName : 'hidden'
        }`}
        htmlFor={props.id}
      />
      <input
        className={`p-2 duration-500 bg-blue-500 cursor-pointer hover:bg-green-500 rounded-md text-white text-m ${props.className}`}
        type={props.type}
        onChange={props.onChange}
        id={props.id}
      />
    </>
  );
}
