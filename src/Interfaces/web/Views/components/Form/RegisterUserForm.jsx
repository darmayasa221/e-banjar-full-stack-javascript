/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector } from 'react-redux';
import registerHandlers from '../../../controllers/register/registerHandlers';
import Input from '../UI/Input';
import InputSubmit from '../UI/InputSubmit';
import WrapInput from '../UI/WrapInput';

export default function RegisterUserForm(props) {
  const { name, ktp, current_address, old_address } = useSelector(
    (state) => state.userRegister
  );
  const [
    onChangeName,
    onChangeKtp,
    onChangeCurrentAddress,
    onChangeOldAddress,
    onHandlreRegister,
  ] = registerHandlers(props.container);
  return (
    <>
      <form
        onSubmit={onHandlreRegister}
        className="flex w-full flex-col justify-between m-0"
      >
        <div className="grid grid-cols-3 ">
          <WrapInput className="text-sm font-black text-gray-600 grid grid-rows-4 gap-y-2 items-center">
            <p>Nama Lengkap</p>
            <p>NO KTP</p>
            <p>Alamat Sekarang</p>
            <p>Alamat Seblumnya</p>
          </WrapInput>
          <WrapInput className="col-span-2 grid grid-rows-4 gap-y-2 items-center">
            <Input
              type="text"
              onChange={onChangeName}
              value={name}
              placeholder="nama lengkap sesuai ktp"
            />
            <Input
              type="number"
              onChange={onChangeKtp}
              value={ktp}
              placeholder="5102xxxxxxxxxxx1"
            />
            <Input
              type="text"
              onChange={onChangeCurrentAddress}
              value={current_address}
              placeholder="alamat tinggal sekarang"
            />
            <Input
              type="text"
              onChange={onChangeOldAddress}
              value={old_address}
              placeholder="alamat tinggal sebelumnya"
            />
          </WrapInput>
        </div>
        <WrapInput className="justify-center items-end sm:h-1/4 sm:items-center">
          <InputSubmit type="submit" className="w-1/4" value="Daftar" />
        </WrapInput>
      </form>
    </>
  );
}
