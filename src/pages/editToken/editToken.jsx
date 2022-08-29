import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/form';
import Header from '../../components/header/header';
import StarWishWallet from '../../components/starWishWallet/starWishWallet';
import './editToken.scss';

export default function EditToken() {
  const history = useNavigate();

  return (
    <div className="container-main-edit-token">
      <Header />
      <section className="bar-edit-token">
        <StarWishWallet />
      </section>
      <main>
        <section className="edit-back">
          <h3>Edit Token</h3>
          <button className="button-back" onClick={() => history('/')}>
            Voltar
          </button>
        </section>
        <Form />
      </main>
    </div>
  );
}
