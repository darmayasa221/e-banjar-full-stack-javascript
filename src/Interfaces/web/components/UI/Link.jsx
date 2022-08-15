import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Link(props) {
  return (
    <>
      <NavLink
        className={`${props.className} py-1 px-5 text-center font-sans hover:text-white`}
        to={props.to || '/'}
      >
        {props.text}
      </NavLink>
    </>
  );
}
