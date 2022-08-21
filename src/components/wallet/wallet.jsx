import React from 'react';
import shootingStar from '../../images/shooting-star.svg';
import Table from '../table/table';

export default function Wallet() {
  return (
    <main>
      <img src={shootingStar} alt="Shooting star" width="50px" />
      <button>Add Token</button>
      <Table />
    </main>
  );
}
