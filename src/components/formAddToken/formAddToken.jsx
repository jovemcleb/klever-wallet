import React from 'react';
import './formAddToken.scss';

export default function FormAddToken() {
  return (
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
  );
}
