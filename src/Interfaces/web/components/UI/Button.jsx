/* eslint-disable react/button-has-type */
import React from 'react';

export default function Button(props) {
  return (
    <button
      onClick={props.onClicks}
      type={props.type || 'button'}
      className={`p-2 bg-blue-500 cursor-pointer active:bg-green-500 rounded-md text-white text-m ${props.className}`}
    >
      {props.text}
    </button>
  );
}
