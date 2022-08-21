import React from 'react';
import kleverLogo from '../../images/logo.svg';
import './header.scss';

export default function Header() {
  return (
    <header>
      <img className="kleverLogo" src={kleverLogo} alt="Klever's logo" />
    </header>
  );
}
