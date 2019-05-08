/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: ${theme.fontBody};
  }
`;

export default GlobalStyles;
