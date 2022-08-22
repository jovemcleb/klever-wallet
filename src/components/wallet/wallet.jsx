import React from 'react';
import shootingStar from '../../images/shooting-star.svg';
import Table from '../table/table';
import './wallet.scss';

export default function Wallet() {
  return (
    <main>
      <section className="bar-wallet">
        <div>
          <img className="shooting-star" src={shootingStar} alt="Shooting star" width="50px" />
          <h1>Wish Wallet</h1>
        </div>
        <button className="add-token-button">Add Token</button>
      </section>
      <Table />
    </main>
  );
}
