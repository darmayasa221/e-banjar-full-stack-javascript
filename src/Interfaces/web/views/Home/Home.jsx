import React from 'react';
import Header from '../../components/Template/Header';
import Wraper from '../../components/UI/Wraper';
import Input from '../../components/UI/Input';

export default function Home() {
  return (
    <>
      <Header
        linkOne="/register"
        linkTwo="/login"
        textLinkOne="Daftar"
        textLinkTwo="Masuk"
      />
      <Wraper className="h-full py-5 px-8">
        <Input placeholder="cari kegiatan disini" type="text" className="w-full" />
        <div>
          List Here
        </div>
      </Wraper>
    </>
  );
}
