import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PopupProvider } from 'contexts/Popup';
import { WorkLocationProvider } from 'contexts/WorkLocation';
import Routes from './Routes';

export default () => (
  <WorkLocationProvider>
    <PopupProvider>
      <Router>
        <Routes />
      </Router>
    </PopupProvider>
  </WorkLocationProvider>
);
