import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/form';
import Header from '../../components/header/header';
import StarWishWallet from '../../components/starWishWallet/starWishWallet';
import './addToken.scss';

export default function AddToken() {
  const history = useNavigate();

  return (
    <div className="container-main-addToken">
      <Header />
      <section className="bar-addToken">
        <StarWishWallet />
      </section>
      <main>
        <section className="addToken-back">
          <h3>Add Token</h3>
          <button className="button-back" onClick={() => history('/')}>
            Voltar
          </button>
        </section>
        <Form />
      </main>
    </div>
  );
}
