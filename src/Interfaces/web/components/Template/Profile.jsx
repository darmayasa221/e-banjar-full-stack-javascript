import React from 'react';
import PorfileDefault from '@Infrastructures/web/public/assets/images/profile_default.png';
import Wraper from '../UI/Wraper';
import Input from '../UI/Input';

export default function Profile() {
  return (
    <Wraper>
      <form
        className="pt-5"
      >
        <div
          className="grid grid-rows-3 grid-cols-6"
        >
          <img
            className="w-full row-start-1 row-end-3 col-start-3 col-end-5 shadow-xl rounded-full"
            src={PorfileDefault}
            alt="#"
          />
          <Input
            className="my-auto block border-none row-start-3 col-start-2 col-end-6 cursor-pointers focus:outline-none hover:translate-y-0 hover:shadow-none"
            type="file"
          />
        </div>
        <div
          className="px-8 flex flex-col"
        >
          <Input
            labelClassName="block"
            textLabel="Nama"
            id="nama"
            type="text"
          />
          <Input
            labelClassName="block"
            textLabel="KTP"
            id="ktp"
            type="number"
          />
          <Input
            labelClassName="block"
            textLabel="Password"
            id="password"
            type="text"
          />
          <Input
            labelClassName="block"
            textLabel="Alamat Sekarang"
            id="current_address"
            type="text"
          />
          <Input
            labelClassName="block"
            textLabel="Alamat Sebelumnya"
            id="old_address"
            type="text"
          />
        </div>
      </form>
    </Wraper>
  );
}
