import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';
import initialState from './initialState';
import View from "./containers/View";
import './helpers';
import './styles';

let store = createStore(
  app,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  // Uncomment during dev
);

class App extends React.Component {
  render () {
    return <View />;
  }
}

render (
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('app')
);
