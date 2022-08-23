import React from 'react';
import DefaultItem from '../../assets/images/default_item.png';
import Link from '../UI/Link';

export default function Activity() {
  return (
    <Link
      className="overflow-hidden py-0 pl-0 pr-0 m-3 sm:m-4 xl:m-5 block border text-sm border-gray-300 rounded duration-200 hover:shadow-xl hover:scale-110 hover:z-10 hover:text-black"
      to="/dashboard/kegiatan/titles"
    >
      <div className="relative">
        <img src={DefaultItem} alt="item" className="w-full" />
        <div className="bg-black absolute bottom-0 px-2">
          <p className="text-white">10-11-201</p>
        </div>
      </div>
      <div className="px-2 bg-white">
        <h3 className="text-left font-bold text-lg">title</h3>
        <p className="text-left truncate pb-2">
          descaasdwasddadwasdwaasdawadw
        </p>
      </div>
    </Link>
  );
}
