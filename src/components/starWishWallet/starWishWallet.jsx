import React from 'react';
import shootingStar from '../../images/shooting-star.svg';
import './starWishWallet.css';

export default function StarWishWallet() {
  return (
    <div className="star-wish-wallet">
      <img className="shooting-star" src={shootingStar} alt="Shooting star" width="50px" />
      <h1>Wish Wallet</h1>
    </div>
  );
}
