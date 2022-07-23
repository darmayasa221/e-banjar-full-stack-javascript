import React from 'react';
import Header from '../../../../Interfaces/web/Views/components/Layout/Header';
import Input from '../../../../Interfaces/web/Views/components/UI/Input';
import Template from '../../../../Interfaces/web/Views/components/UI/Template';
import WrapMain from '../../../../Interfaces/web/Views/components/UI/WrapMain';

export default function Home() {
  return (
    <Template>
      <Header
        linkToOne="register"
        linkToTwo="login"
        linkOne="register"
        linkTwo="Login"
      />
      <WrapMain className="justify-center items-center">
        <Input type="text" className="w-1/2" />
      </WrapMain>
    </Template>
  );
}
