import React from 'react';
import Wraper from '../UI/Wraper';
import MenuList from './MenuList';

export default function DashboardUser() {
  return (
    <Wraper
      className="h-full w-full grid grid-cols-8 items-center absolute top-0 z-10 pt-16"
    >
      <div className="hidden xl:block h-full col-span-1  border-r-4 border-r-white shadow-md">
        <MenuList />
      </div>
      <div className="h-full flex justify-center xl:col-start-2 xl:col-end-9">
        <h1>Main Menu</h1>
        <div>
          List Here
        </div>
      </div>
    </Wraper>
  );
}
