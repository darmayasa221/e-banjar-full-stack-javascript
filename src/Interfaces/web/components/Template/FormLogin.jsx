import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../UI/Input';
import Button from '../UI/Button';
import HandlerLogin from '../../controller/handlers/HandlerLogin';

export default function FormLogin() {
  const loginUserState = useSelector(({ loginUser }) => loginUser);
  const { onSubmit, onChangeUsername, onChangePassword } = HandlerLogin(loginUserState);
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col m-0"
      >
        <div className="grid grid-rows-4 gap-y-2 items-center">
          <Input
            labelClassName="text-sm"
            textLabel="Username"
            type="text"
            id="username"
            onChange={onChangeUsername}
            placeholder="5102xxxxxxxxxxxx1"
            value={loginUserState.username}
          />
          <Input
            labelClassName="text-sm"
            textLabel="Passsword"
            type="password"
            id="password"
            onChange={onChangePassword}
            placeholder="****************"
            value={loginUserState.password}
          />
        </div>
        <Button className="mx-auto mt-4 w-1/4" text="Masuk" type="submit" />
      </form>
    </>
  );
}
