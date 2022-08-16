import React from 'react';
import Navbar from '../UI/Navbar';

export default function Header(props) {
  return (
    <header
      className={`${props.className} w-screen bg-blue-500 px-5 py-4 sm:px-8 xl:px-20 `}
    >
      <Navbar
        linkOne={props.linkOne}
        linkTwo={props.linkTwo}
        textLinkOne={props.textLinkOne}
        textLinkTwo={props.textLinkTwo}
      />
    </header>
  );
}
