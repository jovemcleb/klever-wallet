import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from '../../context/walletContext';
import './formAddToken.scss';

export default function FormAddToken() {
  const history = useNavigate();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  const { addToken } = useContext(WalletContext);

  const handleAddToken = (e) => {
    e.preventDefault();
    addToken({ token, balance });

    history('/');
  };
  const validate = () => {
    if (token.length >= 3 && balance.length >= 2) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  useEffect(() => {
    validate();
  }, [token, balance]);

  return (
    <form className="form-addToken" action="">
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

      <div className="div-button">
        <button
          className="button-save"
          disabled={isDisable}
          onClick={(event) => handleAddToken(event)}>
          Save
        </button>
      </div>
    </form>
  );
}
