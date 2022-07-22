import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocationProvider } from 'contexts/Location';
import { LoadingProvider } from 'contexts/Loading';
import { PopupProvider } from 'contexts/Popup';
import { WorkLocationProvider } from 'contexts/WorkLocation';
import Routes from './Routes';

export default () => (
  <LoadingProvider>
    <LocationProvider>
      <WorkLocationProvider>
        <PopupProvider>
          <Router>
            <Routes />
          </Router>
        </PopupProvider>
      </WorkLocationProvider>
    </LocationProvider>
  </LoadingProvider>
);
