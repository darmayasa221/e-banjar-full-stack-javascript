import React from 'react';
import Input from '../UI/Input';
import WrapInput from '../UI/WrapInput';

export default function RegisterUserForm() {
  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-3 gap-2 h-5/6">
        <WrapInput className="grid grid-rows-4 gap-y-4 items-center">
          <p>Nama Lengkap</p>
          <p>NO KTP</p>
          <p>Alamat Sekarang</p>
          <p>Alamat Seblumnya</p>
        </WrapInput>
        <WrapInput className="col-span-2 grid grid-rows-4 gap-y-4 items-center">
          <Input type="text" />
          <Input type="number" />
          <Input type="text" />
          <Input type="text" />
        </WrapInput>
      </div>
      <WrapInput className="mx-auto">
        <Input type="submit" />
      </WrapInput>
    </form>
  );
}
