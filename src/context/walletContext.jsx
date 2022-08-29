import { createContext, useState } from 'react';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [tokens, setTokens] = useState([
    { token: 'KLV', balance: '10,250.50' },
    { token: 'DVK', balance: '50,250.71' },
    { token: 'KFI', balance: '10' }
  ]);

  const addToken = ({ token, balance }) => {
    setTokens((state) => [...state, { token, balance }]);
  };

  const context = {
    tokens,
    setTokens,
    addToken
  };
  return <WalletContext.Provider value={context}>{children}</WalletContext.Provider>;
}
