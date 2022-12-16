import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from '../../context/walletContext';
import './form.scss';

export default function AddTokenForm() {
  const history = useNavigate();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [isDisable, setIsDisable] = useState(false);

  const { tokens, addToken } = useContext(WalletContext);

  const tokenValidate = tokens.some((element) => element.token === token);

  const handleAddToken = (e) => {
    e.preventDefault();
    const newArrTokens = [...tokens, { token, balance }];
    addToken(newArrTokens);
    history('/');
  };

  const handleSave = (event) => {
    event.preventDefault();
    handleAddToken(event);

    history('/');
  };

  return (
    <form className="form" onSubmit={handleSave}>
      <div className="inputs">
        <label htmlFor="input-token">Token</label>
        <input
          type="text"
          name="token"
          id="input-token"
          value={token}
          onChange={({ target }) => setToken(target.value)}
          required
        />
        {tokenValidate && <span className="alert-token">Token already exists</span>}
      </div>

      <div className="inputs">
        <label htmlFor="input-balance">Balance</label>
        <input
          type="text"
          name="balance"
          id="input-balance"
          value={balance}
          onChange={({ target }) => setBalance(target.value)}
          required
        />
      </div>

      <div className={'div-button'}>
        <button className="button-save" disabled={isDisable}>
          Save
        </button>
      </div>
    </form>
  );
}
