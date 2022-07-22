import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store';
import { LocationProvider } from 'contexts/Location';
import { LoadingProvider } from 'contexts/Loading';
import Initializer from './Initializer';
import Routes from './Routes';

export default () => (
  <Provider store={store}>
    <LoadingProvider>
      <LocationProvider>
        <Initializer />
        <Router>
          <Routes />
        </Router>
      </LocationProvider>
    </LoadingProvider>
  </Provider>
);
