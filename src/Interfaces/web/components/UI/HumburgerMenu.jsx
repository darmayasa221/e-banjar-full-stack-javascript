/* eslint-disable no-unused-expressions */
import React from 'react';

export default function HumbergerMenu(props) {
  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          !props.mode
            ? props.setMode(true)
            : props.setMode(false);
        }}
        className={`humbergerWrap ${props.mode ? 'open' : ''}`}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <style>
        {`
        .humbergerWrap {
          display: flex;
          cursor: pointer;
          flex-direction: column;
          justify-content: space-between;
          height: 20px;
        }
        .humbergerWrap span {
          display: block;
          width: 28px;
          height: 3px;
          background-color: black;
          border-radius: 3px;
          transition: all 0.5s;
        }
        .open span:nth-child(1) {
          transform-origin: 0 0;
          transform: rotate(45deg) translate(-1px, -1px);
        }
        .open span:nth-child(3) {
          transform-origin: 0 100%;
          transform: rotate(-45deg) translate(-1px, 0px);
        }
        .open span:nth-child(2) {
          background-color: white;
          transform: scale(0);
        }
        @media screen and (min-width: 1280px) {
          .humbergerWrap {
            display: none;
          }
        }
        `}
      </style>
    </>
  );
}
