import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

export default function FormLogin() {
  return (
    <>
      <form
        // onSubmit={onHandlerLogin}
        className="flex flex-col m-0"
      >
        <div className="grid grid-rows-4 gap-y-2 items-center">
          <Input
            labelClassName="text-sm"
            textLabel="Username"
            type="text"
            id="username"
            // onChange={onChangeUsername}
            placeholder="5102xxxxxxxxxxxx1"
            // value={username}
          />
          <Input
            labelClassName="text-sm"
            textLabel="Passsword"
            type="password"
            id="password"
            // onChange={onChangePassword}
            placeholder="****************"
            // value={password}
          />
        </div>
        <Button className="mx-auto mt-4 w-1/4" text="Masuk" />
      </form>
    </>
  );
}
