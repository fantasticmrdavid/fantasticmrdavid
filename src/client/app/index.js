import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import app from './reducers';
import store from './store';
import View from "./containers/View";
import './helpers';
import './styles';

class App extends Component {
  render () {
    return <View />;
  }
}

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
