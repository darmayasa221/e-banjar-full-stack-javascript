import React from 'react';
import PorfileDefault from '../../assets/images/profile_default.png';
import Wraper from '../UI/Wraper';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Link from '../UI/Link';

export default function Profile() {
  return (
    <Wraper>
      <form className="pt-5">
        <div className="grid grid-rows-3 grid-cols-6 md:px-36 xl:px-60 2xl:px-96">
          <img
            className="w-full row-start-1 row-end-3 col-start-3 col-end-5 shadow-xl rounded-full"
            src={PorfileDefault}
            alt="default"
          />
          <Input
            className="my-auto block border-none row-start-3 col-start-2 col-end-6 cursor-pointers focus:outline-none hover:translate-y-0 hover:shadow-none"
            type="file"
          />
        </div>
        <div className="px-8 flex flex-col md:px-32 xl:px-64">
          <Input
            className="md:mb-2"
            labelClassName="block"
            textLabel="Nama"
            id="nama"
            type="text"
          />
          <Input
            className="md:mb-2"
            labelClassName="block"
            textLabel="KTP"
            id="ktp"
            type="number"
          />
          <Input
            className="md:mb-2"
            labelClassName="block"
            textLabel="Password"
            id="password"
            type="text"
          />
          <Input
            className="md:mb-2"
            labelClassName="block"
            textLabel="Alamat Sekarang"
            id="current_address"
            type="text"
          />
          <Input
            className="md:mb-2"
            labelClassName="block"
            textLabel="Alamat Sebelumnya"
            id="old_address"
            type="text"
          />
        </div>
        <div className="flex py-5 items-center justify-center">
          <Button
            className="md:w-1/4 xl:w-1/6"
            type="submit"
            text="Simpan"
            onClick={((e) => { e.preventDefault(); })}
          />
          <Link to="/dashboard" text="Kembali" className="hover:text-black md:w-1/4 xl:w-1/6" />
        </div>
      </form>
    </Wraper>
  );
}
