import React from 'react';
import Header from '../../components/header/header';
import StarWishWallet from '../../components/starWishWallet/starWishWallet';
import shootingStar from '../../images/shooting-star.svg';
import './addToken.scss';

export default function AddToken() {
  return (
    <div className="container-main">
      <Header />
      <StarWishWallet />
    </div>
  );
}
