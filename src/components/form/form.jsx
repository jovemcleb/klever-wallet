import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { WalletContext } from '../../context/walletContext';
import './form.css';

export default function Form() {
  const history = useNavigate();
  const { pathname } = useLocation();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [tokenExists, setTokenExists] = useState(false);
  const [tokenEdit, setTokenEdit] = useState('');

  const { tokens, addToken, tokenToEdit } = useContext(WalletContext);

  const handleAddToken = (e) => {
    e.preventDefault();
    const newArrTokens = [...tokens, { token, balance }];
    addToken(newArrTokens);
    history('/');
  };

  const handleEditToken = (e) => {
    e.preventDefault();
    const tokensUpdated = tokens.map((element) => {
      if (element.token === tokenEdit) {
        return { token, balance };
      }
      return element;
    });

    addToken(tokensUpdated);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (pathname === '/edit-token') {
      handleEditToken(event);
    } else {
      handleAddToken(event);
    }

    history('/');
  };

  const handleRemoveToken = (token) => {
    const newTokens = tokens.filter(({ token: eToken }) => eToken !== token);
    addToken(newTokens);
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
    if (pathname === '/edit-token') {
      const { token, balance } = tokenToEdit;
      setToken(token);
      setTokenEdit(token);
      setBalance(balance);
    }
  }, []);

  useEffect(() => {
    if (pathname === '/edit-token') {
      validateInputs();
    } else {
      validateInputs();
      validateToken();
    }
  }, [token, balance]);

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
        {pathname !== '/edit-token' && tokenExists && (
          <span className="alert-token">Token already exists</span>
        )}
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

      <div className={pathname === '/edit-token' ? 'div-button edit' : 'div-button'}>
        {pathname === '/edit-token' && (
          <button
            className="button-remove"
            onClick={() => {
              handleRemoveToken(token);
              history('/');
            }}>
            Remove
          </button>
        )}
        <button className="button-save" disabled={isDisable}>
          Save
        </button>
      </div>
    </form>
  );
}
