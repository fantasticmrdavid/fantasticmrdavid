import 'core-js/stable';
import React from 'react';
import { render } from 'react-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import Client from 'routers/Client';
import { LoadFonts } from 'helpers/fonts';
import './helpers';

const { NODE_ENV } = process.env;

render(
  <Client />,
  document.getElementById('app'),
);

if (NODE_ENV === 'production' && 'serviceWorker' in navigator) runtime.register();
LoadFonts();
