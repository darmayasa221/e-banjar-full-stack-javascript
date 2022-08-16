import React from 'react';
import Navbar from '../UI/Navbar';
import Wraper from '../UI/Wraper';
import Notification from './Notification';

export default function Header(props) {
  return (
    <>
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
      <Wraper className="h-auto w-full flex justify-end">
        <Notification />
      </Wraper>
    </>
  );
}
