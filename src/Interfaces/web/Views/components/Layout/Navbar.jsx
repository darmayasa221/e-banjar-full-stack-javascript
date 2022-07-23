/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="bg-blue-500 h-16 flex justify-center items-center ">
      <div className="container flex justify-between items-center">
        <div className="">logo</div>
        <div className="border-l-2 border-whites flex justify-center items-center link w-1/5">
          <Link
            className=" text-center w-3/5 font-sans text-lg font-bold tracking-wide  hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            to={props.linkToOne || '/'}
          >
            {props.linkOne}
          </Link>
          <Link
            className="w-2/5 rounded-lg text-center font-sans text-xl font-bold tracking-wide bg-slate-900 text-white hover:bg-white hover:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            to={props.linkToTwo || '/'}
          >
            {props.linkTwo}
          </Link>
        </div>
      </div>
    </nav>
  );
}
