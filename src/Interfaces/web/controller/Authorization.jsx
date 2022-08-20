import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HandlerAuthorization from './handlers/HandlerAuthorization';

export default function Authorization(props) {
  const { authed } = useSelector(({ authorization }) => authorization);
  const { dispatchAuthorization } = HandlerAuthorization();
  useEffect(() => {
    (async () => {
      if (!authed) {
        await dispatchAuthorization();
      }
    })();
  }, [authed]);
  return (
    <>
      {props.children}
    </>
  );
}
