import React, { useState } from 'react';
import Navbar from '../UI/Navbar';
import Wraper from '../UI/Wraper';
import Notification from './Notification';
import Card from '../UI/Card';
import MenuList from './MenuList';

export default function Header(props) {
  const [mode, setMode] = useState(false);
  return (
    <>
      <header
        className={`${props.className} w-screen bg-blue-500 px-5 py-4 sm:px-8 xl:px-20 `}
      >
        <Navbar
          authorizationed={props.authorizationed}
          mode={mode}
          setMode={setMode}
          linkOne={props.linkOne}
          linkTwo={props.linkTwo}
          textLinkOne={props.textLinkOne}
          textLinkTwo={props.textLinkTwo}
        />
      </header>
      <Wraper className={`w-full flex justify-end h-auto ${props.authorizationed && 'overflow-hidden relative'}`}>
        <Notification />
        <Wraper
          className={`${mode ? 'relative w-96 translate-x-0' : 'translate-x-full'} duration-200 absolute xl:hidden`}
        >
          <Card>
            <MenuList />
          </Card>
        </Wraper>
      </Wraper>
    </>
  );
}
