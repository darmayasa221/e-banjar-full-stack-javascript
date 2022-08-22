import React from 'react';
import PorfileDefault from '../../assets/images/profile_default.png';
import Wraper from '../UI/Wraper';

export default function Person() {
  return (
    <Wraper
      className="overflow-hidden py-0 pl-0 pr-0 m-3 sm:m-4 xl:m-5 block border text-sm border-gray-300 rounded duration-200 hover:shadow-xl hover:scale-110 hover:z-10 hover:text-black"
    >
      <div className="relative">
        <img src={PorfileDefault} alt="item" className="w-full" />
      </div>
      <div className="border-t-2 border-neutral-100 grid grid-cols-2 px-2 bg-white">
        <section
          className="row-end-2 col-start-1 col-end-2"
        >
          <p>Nama </p>
          <p>Alamat </p>
        </section>
        <section
          className="col-start-2 col-end-3 text-justify"
        >
          <p>: jhon</p>
          <p style={{
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}
          >
            : jl abc. no xyzadwasdwaasdwaaadwaassadad
          </p>
        </section>
      </div>
    </Wraper>
  );
}
