import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  const root = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    , root);
});
