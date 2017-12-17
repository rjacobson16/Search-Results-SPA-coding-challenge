import React from 'react';
import ReactDOM from './store/store';
import configureStore from './store/store';
import Root from './components/root';
import { fetchSearchBooks } from './util/api_util.js';


window.fetchSearchBooks = fetchSearchBooks;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render( <Root store={store} />, root);
});
