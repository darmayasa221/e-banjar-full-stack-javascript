import React from 'react';
import registerHandlers from '../../../controllers/register/registerHandlers';
import Input from '../UI/Input';
import InputSubmit from '../UI/InputSubmit';
import WrapInput from '../UI/WrapInput';

export default function RegisterUserForm(props) {
  const [
    onChangeName,
    onChangeKtp,
    onChangeCurrentAddress,
    onChangeOldAddress,
    onHandlreRegister,
  ] = registerHandlers(props.container);
  return (
    <form
      onSubmit={onHandlreRegister}
      className="flex w-full flex-col justify-between m-0"
    >
      <div className="grid grid-cols-3 ">
        <WrapInput className="text-base grid grid-rows-4 gap-y-2 items-center">
          <p>Nama Lengkap</p>
          <p>NO KTP</p>
          <p>Alamat Sekarang</p>
          <p>Alamat Seblumnya</p>
        </WrapInput>
        <WrapInput className="col-span-2 grid grid-rows-4 gap-y-2 items-center">
          <Input type="text" onChange={onChangeName} />
          <Input type="number" onChange={onChangeKtp} />
          <Input type="text" onChange={onChangeCurrentAddress} />
          <Input type="text" onChange={onChangeOldAddress} />
        </WrapInput>
      </div>
      <WrapInput className="justify-center items-end sm:h-1/4 sm:items-center">
        <InputSubmit type="submit" className="w-1/4" />
      </WrapInput>
    </form>
  );
}
