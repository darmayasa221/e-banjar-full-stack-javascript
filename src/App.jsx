import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Infrastructures/redux';
import Controller from './Interfaces/web/controller/Controller';
import '@Interfaces/web/assets/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Controller />
    </Provider>
  </BrowserRouter>,
);
