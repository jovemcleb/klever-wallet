import React from "react";
import kleverIcon from "../images/logo.svg";

export default function Header() {
  return (
    <header>
      <h1>klever</h1>
      <img src={kleverIcon} alt="Logo da Klever" />
    </header>
  );
}
