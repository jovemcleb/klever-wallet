import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from '../../context/walletContext';
import './form.scss';

export default function EditTokenForm() {
  const history = useNavigate();

  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [tokenEdit, setTokenEdit] = useState('');

  const { tokens, addToken, tokenToEdit } = useContext(WalletContext);

  const handleChangeBalance = ({ target }) => {
    setBalance(target.value);
  };

  const handleEditToken = (e) => {
    e.preventDefault();
    const tokensUpdated = tokens.map((element) => {
      if (element.token === tokenEdit) {
        return { token, balance };
      }
      return element;
    });
    console.log(tokensUpdated);

    addToken(tokensUpdated);
  };

  const handleRemoveToken = (token) => {
    const newTokens = tokens.filter(({ token: eToken }) => eToken !== token);
    addToken(newTokens);
  };

  const handleSave = (event) => {
    event.preventDefault();
    handleEditToken(event);

    history('/');
  };

  useEffect(() => {
    const { token, balance } = tokenToEdit;
    setToken(token);
    setTokenEdit(token);
    setBalance(balance);
  }, []);

  return (
    <form className="form" onSubmit={handleSave}>
      <div className="inputs">
        <label htmlFor="input-token">Token</label>
        <h1>{token}</h1>
      </div>

      <div className="inputs">
        <label htmlFor="input-balance">Balance</label>
        <input
          type="text"
          name="balance"
          id="input-balance"
          value={balance}
          onChange={handleChangeBalance}
          required
        />
      </div>

      <div className={'div-button edit'}>
        <button
          className="button-remove"
          onClick={() => {
            handleRemoveToken(token);
            history('/');
          }}>
          Remove
        </button>
        <button
          className="button-save"
          disabled={balance?.length <= 2 ? true : false}
          onClick={() => handleEditToken()}>
          Save
        </button>
      </div>
    </form>
  );
}
