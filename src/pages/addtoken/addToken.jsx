import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      <section className="addToken-back">
        <h3>Add Token</h3>
        <button className="button-back" onClick={() => history('/')}>
          Voltar
        </button>
      </section>
      <form className="form-addToken" action="">
        <div className="inputs">
          <label htmlFor="input-token">Token</label>
          <input type="text" name="token" id="input-token" required />
        </div>

        <div className="inputs">
          <label htmlFor="input-balance">Balance</label>
          <input type="text" name="balance" id="input-balance" required />
        </div>

        <div className="div-button">
          <button className="button-save">Save</button>
        </div>
      </form>
    </div>
  );
}
