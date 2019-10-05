import styled, { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';

const cubeColors = [
  'rgb(209, 43, 43)',
  'rgb(66, 33, 99)',
  'rgb(0, 0, 255)',
];

interface ContainerProps {
  loading: boolean,
}

const spin = keyframes`
  from { transform: rotateX(15deg) rotateY(15deg); }
  to { transform: rotateX(-60deg) rotateY(60deg); }
`;

const cycleColor = keyframes`
  ${cubeColors.map((c: string, i: number) => `
    ${i * (100 / cubeColors.length)}% {
      background-color: ${transparentize(0.9, c)};
      border: ${`1px solid ${transparentize(0.8, c)}`};
    }`)}
    100% {
      background-color: ${transparentize(0.9, cubeColors[0])};
      border: ${`1px solid ${transparentize(0.8, cubeColors[0])}`};
    }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  perspective: 800px;
  perspective-origin: 50% 150px;
  transition: 0.5s;
  transform: ${css`scale(${(props: ContainerProps) => (props.loading ? 8 : 2)})`};
`;

export const Polygon = styled.div`
  position: absolute;
  bottom: 225px;
  right: -100px;
  width: 300px;
  transform-style: preserve-3d;
  animation: ${css`${spin} 0.6s normal linear`};
  animation-fill-mode: forwards;
`;

const Side = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  animation: ${css`${cycleColor} 45s normal infinite`};
`;

export const Back = styled(Side)`
  transform: translateZ(-150px) rotateY(180deg);
`;

export const Right = styled(Side)`
  transform: rotateY(-270deg) translateX(150px);
  transform-origin: top right;
`;

export const Left = styled(Side)`
  transform: rotateY(270deg) translateX(-150px);
  transform-origin: center left;
`;

export const Top = styled(Side)`
  transform: rotateX(-90deg) translateY(-152px);
  transform-origin: top center;
`;

export const Bottom = styled(Side)`
  transform: rotateX(90deg) translateY(150px);
  transform-origin: bottom center;
`;

export const Front = styled(Side)`
  transform: translateZ(150px);
`;
