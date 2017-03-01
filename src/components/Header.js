import React from 'react';
import {IndexLink} from 'react-router';

import './Header.css';
import fcclogo from '../assets/images/freecodecamp_logo.svg';

const Header = () => (
  <header className="Header">
    <div className="col-md-2 col-sm-5 col-xs-6">
      <a href="http://www.freecodecamp.com" target="_blank" rel="noreferrer noopener">
        <img src={fcclogo} alt="learn to code javascript at Free Code Camp London campers site"/>
      </a>
      <small>London UK Campers</small>
    </div>
    <ul className="nav nav-tabs">
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><IndexLink to="/campers" activeClassName="active">Campers</IndexLink></li>
    </ul>
  </header>
);

export default Header;
