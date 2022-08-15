import React from 'react';
import Header from '../../template/Header';
import WrapMain from '../../../../../Interfaces/web/components/UI/WrapMain';
import Input from '../../../../../Interfaces/web/components/UI/Input';

export default function Home() {
  return (
    <>
      <Header
        linkOne="/register"
        linkTwo="/login"
        textLinkOne="Daftar"
        textLinkTwo="Masuk"
      />
      <WrapMain className="py-5 px-8">
        <Input placeholder="cari kegiatan disini" type="text" className="w-full" />
        <div>
          List Here
        </div>
      </WrapMain>
    </>
  );
}
