import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import View from './containers/View';
import './helpers';
import './styles';

const App = () => <View />;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
