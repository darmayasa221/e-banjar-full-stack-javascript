import React from 'react';
import { Outlet } from 'react-router-dom';
import Wraper from '../UI/Wraper';
import MenuList from './MenuList';

export default function DashboardUser() {
  return (
    <Wraper
      className="h-full w-full xl:grid xl:grid-cols-8 items-center absolute top-0 pt-16 overflow-scroll"
    >
      <div className="hidden xl:block h-full col-span-1  border-r-4 border-r-white shadow-md">
        <MenuList />
      </div>
      <div className="h-full flex flex-col xl:items-center xl:col-start-2 xl:col-end-9">
        <Outlet />
      </div>
    </Wraper>
  );
}
