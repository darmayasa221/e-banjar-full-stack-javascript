import React from 'react';
import Navbar from './Navbar';

export default function Header(props) {
  return (
    <header>
      <Navbar
        linkToOne={props.linkToOne}
        linkToTwo={props.linkToTwo}
        linkOne={props.linkOne}
        linkTwo={props.linkTwo}
      />
    </header>
  );
}
