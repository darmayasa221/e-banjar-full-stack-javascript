/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useSelector } from 'react-redux';
import RegisterUserForm from '../../../../Interfaces/web/Views/components/Form/RegisterUserForm';
import Header from '../../../../Interfaces/web/Views/components/Layout/Header';
import Card from '../../../../Interfaces/web/Views/components/UI/Card';
import Message from '../../../../Interfaces/web/Views/components/UI/Message';
import Template from '../../../../Interfaces/web/Views/components/UI/Template';
import WrapMain from '../../../../Interfaces/web/Views/components/UI/WrapMain';

export default function Register(props) {
  const { error, errorMessage } = useSelector((state) => state.errors);
  const { status, responseMessage } = useSelector(
    (state) => state.responseServer
  );
  return (
    <Template>
      <Header linkToOne="/" linkToTwo="/login" linkOne="home" linkTwo="Login" />
      <WrapMain className="flex justify-center items-center relative overflow-x-hidden">
        <Message
          className="text-red-600 "
          classNameCard={`w-full p-4 md:w-1/2 lg:w-1/3 absolute top-0 right-0 text-center translate-x-full duration-150 ${
            error ? '-translate-x-0 duration-150' : ' '
          }`}
          message={`${errorMessage} ‼️`}
        />
        {status && <Message message={responseMessage} />}
        <Card className="w-11/12 h-80 p-4 flex sm:w-9/12 sm:h-2/5 md:p-8 xl:w-1/2">
          <RegisterUserForm container={props.container} />
        </Card>
      </WrapMain>
    </Template>
  );
}
