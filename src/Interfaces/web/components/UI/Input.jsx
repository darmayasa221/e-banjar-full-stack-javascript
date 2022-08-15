import React from 'react';

export default function Input(props) {
  return (
    <>
      <label
        className={`${props.labelClassName || 'hidden'} font-black text-gray-600`}
        htmlFor={props.id}
      >
        {props.textLabel}
      </label>
      <input
        className={`p-2 border text-sm border-gray-300 rounded duration-300 hover:shadow-xl hover:-translate-y-1 focus:-translate-y-1 focus:shadow-xl ${props.className}`}
        type={props.type}
        onChange={props.onChange}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
      />
    </>
  );
}
