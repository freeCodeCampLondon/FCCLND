import React from 'react';
import {Link} from 'react-router';

import fcclogo from 'assets/images/freecodecamp_logo.svg';

const Header = () => (
  <header>
    <div className="col-md-2 col-sm-5 col-xs-6">
      <a href="http://www.freecodecamp.com" target="_blank">
        <img src={fcclogo} alt="learn to code javascript at Free Code Camp logo London campers site"/>
      </a>
      <small>London UK Campers</small>
    </div>
    <ul className="nav nav-tabs">
      <li><Link to="/">Home</Link></li>
      <li><Link to="#/campers/">Campers</Link></li>
    </ul>
  </header>
);

export default Header;
