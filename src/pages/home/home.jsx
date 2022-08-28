import React from 'react';
import Header from '../../components/header/header';
import Wallet from '../../components/wallet/wallet';
import './home.scss';
export default function Home() {
  return (
    <div className="container-main-home">
      <Header />
      <Wallet />
    </div>
  );
}
