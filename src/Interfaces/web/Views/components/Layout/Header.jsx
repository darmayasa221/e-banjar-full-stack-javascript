/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Navbar from './Navbar';

export default function Header(props) {
  return (
    <header>
      <Navbar link_one={props.link_one} link_two={props.link_two} />
    </header>
  );
}
