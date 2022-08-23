import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../UI/Input';
import Button from '../UI/Button';
import HandlerRegister from '../../controller/handlers/HandlerRegister';

export default function FormRegister() {
  const registerUserState = useSelector(({ registerUser }) => registerUser);
  const {
    onChangeName,
    onChangeKtp,
    onChangeCurrentAddress,
    onChangeOldAddress,
    onSubmit,
  } = HandlerRegister(registerUserState);
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col m-0"
      >
        <div className="grid grid-cols-3">
          <div className="col-span-1 text-sm font-black text-gray-600 grid grid-rows-4 gap-y-2 items-center">
            <p>Nama Lengkap</p>
            <p>NO KTP</p>
            <p>Alamat Sekarang</p>
            <p>Alamat Seblumnya</p>
          </div>
          <div className="col-start-2 col-end-4 grid grid-rows-4 gap-y-2 items-center">
            <Input
              className="px-0 pl-2"
              type="text"
              id="nama"
              onChange={onChangeName}
              value={registerUserState.name}
              placeholder="nama lengkap sesuai ktp"
            />
            <Input
              className="px-0 pl-2"
              type="number"
              id="ktp"
              onChange={onChangeKtp}
              value={registerUserState.ktp}
              placeholder="5102xxxxxxxxxxx1"
            />
            <Input
              className="px-0 pl-2"
              type="text"
              id="cuurent_address"
              onChange={onChangeCurrentAddress}
              value={registerUserState.current_address}
              placeholder="alamat tinggal sekarang"
            />
            <Input
              className="px-0 pl-2"
              type="text"
              id="old_address"
              onChange={onChangeOldAddress}
              value={registerUserState.old_address}
              placeholder="alamat tinggal sebelumnya"
            />
          </div>
        </div>
        <Button className="mx-auto mt-4 w-1/4" text="Daftar" type="submit" />
      </form>
    </>
  );
}
