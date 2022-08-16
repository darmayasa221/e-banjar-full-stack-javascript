import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';

export default function Notification() {
  const { status, message, mode } = useSelector(({ notification }) => notification);
  return (
    <>
      <Card
        className={`${(status !== 'success') && 'text-red-600'} ${!mode && 'translate-x-full'} text-center relative z-40 text-black p-3 translate-x-0 duration-200 w-full xl:w-1/2`}
      >
        <p>{message}</p>
      </Card>
    </>
  );
}
