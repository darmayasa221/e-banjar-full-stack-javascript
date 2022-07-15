import React from 'react';
import Input from '../UI/Input';
import InputSubmit from '../UI/InputSubmit';
import WrapInput from '../UI/WrapInput';

export default function RegisterUserForm() {
  return (
    <form className="flex w-full flex-col justify-between m-0">
      <div className="grid grid-cols-3 ">
        <WrapInput className="text-base grid grid-rows-4 gap-y-2 items-center">
          <p>Nama Lengkap</p>
          <p>NO KTP</p>
          <p>Alamat Sekarang</p>
          <p>Alamat Seblumnya</p>
        </WrapInput>
        <WrapInput className="col-span-2 grid grid-rows-4 gap-y-2 items-center">
          <Input type="text" />
          <Input type="number" />
          <Input type="text" />
          <Input type="text" />
        </WrapInput>
      </div>
      <WrapInput className="justify-center items-end sm:h-1/4 sm:items-center">
        <InputSubmit type="submit" className="w-1/4" />
      </WrapInput>
    </form>
  );
}
