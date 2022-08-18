import React from 'react';
import Link from './Link';
import HumbergetMenu from './HumburgerMenu';

export default function Navbar(props) {
  return (
    <nav
      className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7"
    >
      <div
        className="my-auto"
      >
        logo
      </div>
      <div
        className={
          `
          ${props.authorizationed && 'justify-around sm:justify-around xl:col-end-7 xl:pl-10 2xl:pl-0'}
          items-center w-full flex border-l-2 pl-1 sm:justify-end sm:col-end-4 md:col-end-5 xl:col-end-6 2xl:col-end-8
          `
        }
      >
        <Link
          className="rounded-lg bg-slate-900 text-white hover:text-black hover:bg-slate-50"
          to={props.linkOne || '/'}
          text={props.textLinkOne}
        />
        <Link
          className={`${props.authorizationed && 'hidden'}`}
          to={props.linkTwo || '/'}
          text={props.textLinkTwo}
        />
        <HumbergetMenu
          mode={props.mode}
          setMode={props.setMode}
        />
      </div>
    </nav>
  );
}
