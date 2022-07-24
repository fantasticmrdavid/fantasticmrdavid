import React from 'react';
import { createRoot } from 'react-dom/client';
import Client from 'routers/Client';
import { LoadFonts } from 'helpers/fonts';
import consoleContent from 'console';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Client />);

LoadFonts();

// eslint-disable-next-line
console.log(
  `%c${consoleContent.text}`,
  consoleContent.style,
);
