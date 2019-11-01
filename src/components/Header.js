import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="nba-logo"><img src="logo.png" alt="nba logo" /></span>
    <ul className="main-nav">
      <li><NavLink exact to ="/">Home</NavLink></li>
      <li><NavLink to ="/about">About</NavLink></li>
      <li><NavLink to ="/players">Players</NavLink></li>
      <li><NavLink to ="/teams">Teams</NavLink></li>
    </ul>    
  </header>
);

export default Header;