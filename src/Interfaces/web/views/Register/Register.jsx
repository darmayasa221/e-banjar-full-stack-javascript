import React from 'react';
import Header from '../../components/Template/Header';
import Card from '../../components/UI/Card';
import Wraper from '../../components/UI/Wraper';
import FormRegister from '../../components/Template/FormRegister';

export default function Register() {
  return (
    <>
      <Header
        className="z-50 relative"
        linkOne="/login"
        linkTwo="/"
        textLinkOne="Masuk"
        textLinkTwo="Kembali"
      />
      <Wraper
        className="h-full w-full flex justify-center items-center absolute top-0 z-10"
      >
        <Card
          className="w-11/12 p-5 mx-2 sm:w-4/5 md:w-4/6 md:p-12 xl:w-3/6 xl:p-16"
        >
          <FormRegister />
        </Card>
      </Wraper>
    </>
  );
}
