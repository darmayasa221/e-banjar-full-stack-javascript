import React from 'react';
import Activity from '../Template/Activity';
import Input from '../UI/Input';
import Wraper from '../UI/Wraper';

export default function Activities() {
  return (
    <Wraper className="w-full">
      <div className="sticky bg-white w-full px-2 pt-3 top-0 z-30 xl:relative xl:top-0 ">
        <Input
          className="w-full"
          type="text"
          id="search"
          placeholder="cari kegiatan masyarakat"
        />
      </div>
      <div className="bg-white  grid grid-cols-2 gap-x-1 gap-y-1 md:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 ">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
    </Wraper>
  );
}
