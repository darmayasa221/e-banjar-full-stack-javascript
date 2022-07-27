import React from 'react';
import { useSelector } from 'react-redux';
import LoginUserForm from '../../../../Interfaces/web/Views/components/Form/LoginUserForm';
import Header from '../../../../Interfaces/web/Views/components/Layout/Header';
import Card from '../../../../Interfaces/web/Views/components/UI/Card';
import Message from '../../../../Interfaces/web/Views/components/UI/Message';
import Template from '../../../../Interfaces/web/Views/components/UI/Template';
import WrapMain from '../../../../Interfaces/web/Views/components/UI/WrapMain';

export default function Login() {
  const { error, errorMessage } = useSelector((state) => state.errors);
  const { status } = useSelector((state) => state.responseServer);
  return (
    <Template>
      <Header
        linkToOne="/"
        linkToTwo="/register"
        linkOne="home"
        linkTwo="register"
      />
      <WrapMain className="flex justify-center items-center relative overflow-x-hidden">
        <Message
          className="text-red-600 "
          classNameCard={`w-full p-4 md:w-1/2 lg:w-1/3 absolute top-0 right-0 text-center translate-x-full duration-150 ${
            error ? '-translate-x-0 duration-150' : ' '
          }`}
          message={`${errorMessage} ‼️`}
        />
        {status && (
          <Message
            classNameCard={`w-full p-4 md:w-1/2 lg:w-1/3 absolute top-0 right-0 text-center translate-x-full duration-150 ${
              status ? '-translate-x-0 duration-150' : ' '
            }`}
            message="Login Berhasil"
          />
        )}
        <Card className="w-11/12 h-80 p-4 flex sm:w-9/12 sm:h-2/5 md:p-8 xl:w-1/3">
          <LoginUserForm />
        </Card>
      </WrapMain>
    </Template>
  );
}
