import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import ViewContainer from 'containers/ViewContainer';
import store from './store';
import './helpers';
import './styles';

const App = () => <ViewContainer />;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if ('serviceWorker' in navigator) runtime.register();
