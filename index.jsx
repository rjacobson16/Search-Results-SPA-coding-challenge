import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchSearchBooks } from './actions/book_actions';
import { changeFilter } from './actions/filter_actions.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.changeFilter = changeFilter;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
