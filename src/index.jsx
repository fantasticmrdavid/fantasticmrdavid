import React from 'react';
import { render } from 'react-dom';
import Client from 'routers/Client';
import { LoadFonts } from 'helpers/fonts';
import consoleContent from 'console';

render(
  <Client />,
  document.getElementById('app'),
);

LoadFonts();

// eslint-disable-next-line
console.log(
  `%c${consoleContent.text}`,
  consoleContent.style,
);
