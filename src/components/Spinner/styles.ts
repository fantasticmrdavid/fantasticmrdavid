import styled, { css, keyframes } from 'styled-components';
import theme from 'styles/theme';

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

const Bar = styled.div`
  color: ${theme.colorWhite};
  animation: ${css`${load} 1s infinite ease-in-out`};
  width: 1em;
  height: 4em;
`;

export const Container = styled.div`
  position: relative;
  height: 160px;
`;

export const Spinner = styled(Bar)`
  position: relative;
  font-size: 11px;
  text-indent: -9999em;
  margin: 88px auto;
  background: ${theme.colorWhite};
  transform: translateZ(0);
  animation-delay: -0.16s;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: '';
    background: ${theme.colorWhite};
    animation: ${css`${load} 1s infinite ease-in-out`};
    width: 1em;
    height: 4em;
  }

  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }
`;
