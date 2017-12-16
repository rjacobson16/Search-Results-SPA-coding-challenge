import React from 'react';
import ReactDOM from './store/store';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render( <Root store={store} />, root);
});
