import { createContext, useState } from 'react';
import useId from 'react-id-generator';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [tokens, setTokens] = useState([
    { id: useId(), token: 'KLV', balance: '10,250.50' },
    { id: useId(), token: 'DVK', balance: '50,250.71' },
    { id: useId(), token: 'KFI', balance: '10' }
  ]);

  const addToken = ({ token, balance }) => {
    setTokens((state) => [...state, { id: useId(), token, balance }]);
  };

  const context = {
    tokens,
    setTokens,
    addToken
  };
  return <WalletContext.Provider value={context}>{children}</WalletContext.Provider>;
}
