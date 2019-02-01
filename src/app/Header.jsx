import React from 'react';
import "./Header.css";

const Header = () => (
  <header className='app-header'>
    <a href="/"><img src="/logo.png" alt="Logo" className="app-header-logo"/></a>
    <h1 className="app-header-title">Just Cinemas</h1>
  </header>
);

Header.defaultProps = {};

export default Header;
 