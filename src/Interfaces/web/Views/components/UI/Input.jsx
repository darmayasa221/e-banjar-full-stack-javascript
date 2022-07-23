/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Input(props) {
  return (
    <>
      <label
        className={`${props.labelClassName ? props.labelClassName : 'hidden'}`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className={`p-2 border border-gray-300 rounded duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 ${props.className}`}
        type={props.type}
        onChange={props.onChange}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
      />
    </>
  );
}
