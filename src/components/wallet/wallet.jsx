import React, { useEffect, useState } from 'react';
import { Table } from '../table/table';
import useId from 'react-id-generator';
import shootingStar from '../../images/shooting-star.svg';

import './wallet.scss';

export default function Wallet() {
  const [tokens, setTokens] = useState([
    { id: useId(), token: 'DVK', balance: '50,250.71' },
    { id: useId(), token: 'KFI', balance: '10' },
    { id: useId(), token: 'KLV', balance: '10,250.50' }
  ]);
  console.log(tokens);

  return (
    <main>
      <section className="bar-wallet">
        <div>
          <img className="shooting-star" src={shootingStar} alt="Shooting star" width="50px" />
          <h1>Wish Wallet</h1>
        </div>
        <button className="add-token-button">Add Token</button>
      </section>
      <Table tokens={tokens} />
    </main>
  );
}
