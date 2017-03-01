import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {render} from 'react-dom';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// custom styles
import './assets/sass/main.css';

// components
import Main from './views/Main';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
  </Router>
),
  document.querySelector('#root'));
