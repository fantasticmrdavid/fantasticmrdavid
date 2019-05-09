import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import ViewContainer from 'containers/ViewContainer';
import { LoadFonts } from 'helpers/fonts';
import store from './store';
import './helpers';

const App = () => <ViewContainer />;

const { NODE_ENV } = process.env;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (NODE_ENV === 'production' && 'serviceWorker' in navigator) runtime.register();
LoadFonts();
