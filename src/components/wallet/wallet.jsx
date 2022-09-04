import React, { useContext, useState } from 'react';
import { WalletContext } from '../../context/walletContext';
import { useNavigate } from 'react-router-dom';
import { Table } from '../table/table';
import StarWishWallet from '../starWishWallet/starWishWallet';
import './wallet.css';

export default function Wallet() {
  const history = useNavigate();
  const { tokens } = useContext(WalletContext);

  return (
    <main>
      <section className="bar-wallet">
        <StarWishWallet />
        <button className="add-token-button" onClick={() => history('/add-token')}>
          Add Token
        </button>
      </section>
      <Table tokens={tokens} />
    </main>
  );
}
