import React, { memo, useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { WalletContext } from '../../context/walletContext';
import './table.scss';

function TableComponent({ tokens }) {
  const { setTokenToEdit } = useContext(WalletContext);
  const history = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th className="th-icons"></th>
          <th className="th-token">Tokens</th>
          <th className="th-balance">Balance</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map(({ token, balance }) => (
          <tr key={token}>
            <td>
              <FaEdit
                className="icon"
                onClick={() => {
                  setTokenToEdit({ token, balance });
                  history('/edit-token');
                }}
              />
            </td>
            <td className="td-token">{token}</td>
            <td className="td-balance">{balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const Table = memo(TableComponent);
