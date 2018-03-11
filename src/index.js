// imports from vendors
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/bootstrap.global.scss';
import './styles/main.scss';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

if (module.hot) {
  module.hot.accept();
}
