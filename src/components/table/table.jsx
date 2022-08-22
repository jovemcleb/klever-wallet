import React from 'react';
import './table.scss';

export default function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th className="thead-token">Tokens</th>
          <th className="thead-balance">Balance</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
