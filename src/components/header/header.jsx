import React from 'react';
import kleverLogo from '../../images/logo.svg';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <img className="kleverLogo" src={kleverLogo} alt="Klever's logo" />
    </header>
  );
}
