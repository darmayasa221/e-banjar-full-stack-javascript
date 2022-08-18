import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import Wraper from '../UI/Wraper';

export default function Notification() {
  const { message, status, mode } = useSelector(({ notification }) => notification);
  return (
    <>
      <Wraper
        className={`${mode ? 'relative w-96 translate-x-0' : 'translate-x-full'}  duration-200 absolute w-full xl:w-1/2`}
      >
        <Card
          className={`${(status !== 'success') && 'text-red-600'} text-center p-3`}
        >
          <p>{message}</p>
        </Card>
      </Wraper>
    </>
  );
}
