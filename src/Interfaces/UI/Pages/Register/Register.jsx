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
      <WrapMain className="justify-center items-center">
        <Card className="h-2/5 w-2/5 p-8 ">
          <RegisterUserForm />
        </Card>
      </WrapMain>
    </Template>
  );
}
