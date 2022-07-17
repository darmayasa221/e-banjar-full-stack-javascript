import React from 'react';
import RegisterUserForm from '../../../../Interfaces/web/Views/components/Form/RegisterUserForm';
import Header from '../../../../Interfaces/web/Views/components/Layout/Header';
import Card from '../../../../Interfaces/web/Views/components/UI/Card';
import Template from '../../../../Interfaces/web/Views/components/UI/Template';
import WrapMain from '../../../../Interfaces/web/Views/components/UI/WrapMain';

export default function Register(props) {
  return (
    <Template>
      <Header link_one="home" link_two="Login" />
      <WrapMain className="flex justify-center items-center">
        <Card className="w-11/12 h-80 p-4 flex sm:w-9/12 sm:h-2/5 md:p-8 xl:w-1/2">
          <RegisterUserForm container={props.container} />
        </Card>
      </WrapMain>
    </Template>
  );
}
