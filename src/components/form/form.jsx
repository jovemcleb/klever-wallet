import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { WalletContext } from '../../context/walletContext';
import './form.scss';

export default function Form() {
  const history = useNavigate();
  const { pathname } = useLocation();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [tokenExists, setTokenExists] = useState(false);

  const { tokens, addToken } = useContext(WalletContext);

  const handleAddToken = (e) => {
    e.preventDefault();
    const newArrTokens = [...tokens, { token, balance }];
    addToken(newArrTokens);
    history('/');
  };

  const validateInputs = () => {
    if (token.length > 0 && token.length >= 3 && balance.length >= 2) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  const validateToken = () => {
    const exists = tokens.some((element) => element.token === token);
    if (exists) {
      setTokenExists(true);
      setIsDisable(true);
    } else {
      setTokenExists(false);
    }
  };

  useEffect(() => {
    validateInputs();
    validateToken();
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
        {tokenExists && <span className="alert-token">Token already exists</span>}
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

      <div className={pathname === '/edit-token' ? 'div-button-edit' : 'div-button'}>
        {pathname === '/edit-token' && <button className="button-remove">Remove</button>}
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
