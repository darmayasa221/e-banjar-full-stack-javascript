import React from 'react';
import RegisterUserForm from '../../../../Infrastructures/components/Form/RegisterUserForm';
import Header from '../../../../Infrastructures/components/Layout/Header';
import Card from '../../../../Infrastructures/components/UI/Card';
import Template from '../../../../Infrastructures/components/UI/Template';
import WrapMain from '../../../../Infrastructures/components/UI/WrapMain';

export default function Register() {
  return (
    <Template>
      <Header link_one="home" link_two="Login" />
      <WrapMain className="flex justify-center items-center">
        <Card className="w-11/12 h-80 p-4 flex sm:w-9/12 sm:h-2/5 md:p-8 xl:w-1/2">
          <RegisterUserForm />
        </Card>
      </WrapMain>
    </Template>
  );
}
