import React from 'react';
import { useSelector } from 'react-redux';
import loginHandlers from '../../../controllers/login/loginHandlers';
import Input from '../UI/Input';
import InputSubmit from '../UI/InputSubmit';
import WrapInput from '../UI/WrapInput';

export default function LoginUserForm() {
  const { username, password } = useSelector((state) => state.loginUser);
  const [onChangeUsername, onChangePassword, onHandlerLogin] = loginHandlers();
  return (
    <>
      <form
        onSubmit={onHandlerLogin}
        className="flex w-full flex-col justify-between m-0"
      >
        <WrapInput className="grid grid-rows-4 gap-y-2 items-center">
          <Input
            labelClassName="text-sm font-black text-gray-600"
            label="Username"
            type="text"
            onChange={onChangeUsername}
            placeholder="5102xxxxxxxxxxxx1"
            value={username}
          />
          <Input
            labelClassName="text-sm font-black text-gray-600"
            label="Passsword"
            type="password"
            onChange={onChangePassword}
            placeholder="****************"
            value={password}
          />
        </WrapInput>
        <WrapInput className="justify-center items-end sm:h-1/4 sm:items-center">
          <InputSubmit type="submit" className="w-1/4" value="Masuk" />
        </WrapInput>
      </form>
    </>
  );
}
