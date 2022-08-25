import React, { memo } from 'react';
import './table.scss';

function TableComponent({ tokens }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="thead-token">Tokens</th>
          <th className="thead-balance">Balance</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map(({ token, balance }) => (
          <tr key={token}>
            <td>{token}</td>
            <td>{balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const Table = memo(TableComponent);
