import React from 'react';
import { useSelector } from 'react-redux';
import FormLogin from '../../../../../Interfaces/web/components/Form/FormLogin';
import WrapMain from '../../../../../Interfaces/web/components/UI/WrapMain';
import Header from '../../template/Header';
import Card from '../../../../../Interfaces/web/components/UI/Card';

export default function Login() {
  // const { error, errorMessage } = useSelector((state) => state.errors);
  // const { status } = useSelector((state) => state.responseServer);
  return (
    <>
      <Header
        className="z-50 relative"
        linkOne="/register"
        linkTwo="/"
        textLinkOne="Daftar"
        textLinkTwo="Kembali"
      />
      <WrapMain
        className="w-full flex justify-center items-center absolute top-0 z-10"
      >
        <Card
          className="w-11/12 p-5 mx-2 sm:w-4/5 md:w-4/6 md:p-12 xl:w-3/6 xl:p-16"
        >
          <FormLogin />
        </Card>
      </WrapMain>
    </>
  );
}
