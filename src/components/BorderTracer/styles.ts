import styled, { css, keyframes } from 'styled-components';

const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 0, 255)',
  'rgb(0, 255, 255)',
];

const cycleColors = keyframes`
  ${colors.map((c: string, i: number) => `
    ${i * (100 / colors.length)}% {
      background-color: ${c};
    }`)}
    100% {
      background-color: ${colors[0]};
    }
`;

const traceLeft = keyframes`
  0% {
    top: -1px;
    left: 50%;
    opacity: 0;
  }
  0.1% {
    opacity: 0.5;
  }
  2.4% {
    width: 50px;
    height: 2px;
  }
  2.5% {
    top: -1px;
    left: 0px;
    width: 2px;
    height: 50px;
  }
  7.4% {
    width: 2px;
    height: 50px;
  }
  7.5% {
    top: 100%;
    left: 0px;
    width: 50px;
    height: 2px;
  }
  9% {
    opacity: 0.5;
  }
  10% {
    top: 100%;
    left: 50%;
    opacity: 0;
  }
`;

const traceRight = keyframes`
  0% {
    top: -1px;
    left: 50%;
    opacity: 0;
  }
  0.1% {
    opacity: 0.5;
  }
  2.4% {
    width: 50px;
    height: 2px;
  }
  2.5% {
    top: -1px;
    left: 100%;
    width: 2px;
    height: 50px;
  }
  7.4% {
    width: 2px;
    height: 50px;
  }
  7.5% {
    top: 100%;
    left: 100%;
    width: 50px;
    height: 2px;
  }
  9% {
    opacity: 0.5;
  }
  10% {
    top: 100%;
    left: 50%;
    opacity: 0;
  }
`;

interface TracerProps {
  direction?: string,
  cycleColor?: boolean,
}

export const Tracer = styled.div<TracerProps>`
  position: absolute;
  top: -1px;
  left: 50%;
  opacity: 0;
  width: 50px;
  height: 2px;
  z-index: 1;
  background: red;
  animation: ${(props) => {
    const { direction, cycleColor } = props;
    return css`
      ${direction === 'left' ? traceLeft : traceRight} 10s normal infinite
      ${cycleColor ? css`, ${cycleColors} 45s normal infinite` : ''}
    `;
  }};
  animation-fill-mode: forwards;
`;
