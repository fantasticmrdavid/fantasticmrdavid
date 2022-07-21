import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store';
import { LocationProvider } from 'contexts/Location';
import Initializer from './Initializer';
import Routes from './Routes';

export default () => (
  <Provider store={store}>
    <LocationProvider>
      <Initializer />
      <Router>
        <Routes />
      </Router>
    </LocationProvider>
  </Provider>
);
