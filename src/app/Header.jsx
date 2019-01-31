import React from 'react';
import "./Header.css";

const Header = () => (
  <header className='app-header'>
    <img src="/logo.png" alt="Logo" className="app-header-logo"/>
    <h1 className="app-header-title">Just Cinemas</h1>
  </header>
);

Header.defaultProps = {};

export default Header;
 