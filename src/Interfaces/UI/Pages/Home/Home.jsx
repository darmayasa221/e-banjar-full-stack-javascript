import React from 'react';
import Header from '../../../../Infrastructures/components/Layout/Header';
import Input from '../../../../Infrastructures/components/UI/Input';
import Template from '../../../../Infrastructures/components/UI/Template';
import WrapMain from '../../../../Infrastructures/components/UI/WrapMain';

export default function Home() {
  return (
    <Template>
      <Header link_one="register" link_two="Login" />
      <WrapMain className="justify-center items-center">
        <Input type="text" className="w-1/2" />
      </WrapMain>
    </Template>
  );
}
