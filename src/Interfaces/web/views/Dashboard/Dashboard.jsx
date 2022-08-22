import React from 'react';
import { Outlet } from 'react-router-dom';
import Authorization from 'Interfaces/web/controller/Authorization';
import Wraper from 'Interfaces/web/components/UI/Wraper';
import MenuList from 'Interfaces/web/components/Menu/MenuList';
import { useSelector } from 'react-redux';
import Header from '../../components/Template/Header';

export default function Dashboard() {
  const { name } = useSelector(({ authorization }) => authorization);
  return (
    <Authorization>
      <Header
        dashboard
        className="z-50 relative"
      />
      <Wraper
        className="h-full w-full xl:grid xl:grid-cols-8 items-center absolute top-0 pt-16"
      >
        <div className="hidden xl:block h-full col-span-1  border-r-4 border-r-white shadow-md">
          <MenuList />
        </div>
        <div className="h-full flex flex-col xl:items-center xl:col-start-2 xl:col-end-9 overflow-y-scroll">
          <Outlet />
        </div>
      </Wraper>
    </Authorization>
  );
}
