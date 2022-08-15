/* eslint-disable comma-dangle */
import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Controller from './Infrastructures/web/reactJS/Controller';
import store from './Infrastructures/state/redux/store';
import slices from './Infrastructures/state/redux/slices';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Provider store={store(slices)}> */}
    <Controller />
    {/* </Provider> */}
  </BrowserRouter>
);
