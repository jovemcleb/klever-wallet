import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '../table/table';
import StarWishWallet from '../starWishWallet/starWishWallet';
import useId from 'react-id-generator';
import './wallet.scss';

export default function Wallet() {
  const history = useNavigate();
  const [tokens, setTokens] = useState([
    { id: useId(), token: 'KLV', balance: '10,250.50' },
    { id: useId(), token: 'DVK', balance: '50,250.71' },
    { id: useId(), token: 'KFI', balance: '10' }
  ]);

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
