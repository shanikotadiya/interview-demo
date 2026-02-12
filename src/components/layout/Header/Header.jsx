import React from 'react';
import { APP_NAME } from '../../../constants/config.js';
import NavBar from '../NavBar/NavBar.jsx';
import './Header.scss';

function Header() {
  return (
    <header className="app-header">
      <div className="app-brand">{APP_NAME}</div>
      <NavBar />
    </header>
  );
}

export default Header;
