import styled, { css, keyframes } from "styled-components";
import theme from "styles/theme";

export const resizeCycle = (min: number, max: number) => keyframes`
  0% {
    width: ${min}%;
  }
  50% {
    width: ${max}%;
  }
  100% {
    width: ${min}%;
  }
`;

export const containerCycle = (max: number, direction: string) => keyframes`
  0% {
    transform: rotateZ(${direction === "cc" ? "-120deg" : "120deg"}) scale(1);
  }
  50% {
    transform: rotateZ(${
      direction === "cc" ? "720deg" : "-720deg"
    }) scale(${max});
  }
  100% {
    transform: rotateZ(${direction === "cc" ? "-120deg" : "120deg"}) scale(1);
  }
`;

type ContainerProps = {
  $maxScale: number;
  $rotateDirection: string;
  $size: number;
  $speed: number;
};

type RingProps = {
  $size: number;
};

type MaskProps = {
  $minSlice: number;
  $maxSlice: number;
  $speed: number;
};

type TickProps = {
  $number: number;
  $totalSlices: number;
};

export const Container = styled.div<ContainerProps>`
  position: absolute;
  box-sizing: border-box;
  top: ${(props) => `calc(50% - ${props.$size / 2}px)`};
  left: ${(props) => `calc(50% - ${props.$size / 2}px)`};
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};
  animation: ${(props) =>
    css`
      ${containerCycle(
        props.$maxScale,
        props.$rotateDirection
      )} ${props.$speed * 2}s normal infinite
    `};
`;

export const Ring = styled.div<RingProps>`
  position: absolute;
  box-sizing: border-box;
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};
`;

export const Mask = styled.div<MaskProps>`
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  overflow: hidden;
  animation: ${(props) =>
    css`
      ${resizeCycle(
        props.$minSlice,
        props.$maxSlice
      )} ${props.$speed}s normal infinite
    `};
`;

export const Tick = styled.div<TickProps>`
  position: absolute;
  height: 100%;
  width: 2px;
  left: calc(50% - 1px);
  font-size: 0.6rem;
  color: ${theme.colorWhite};
  transform: ${(props) =>
    `rotateZ(-${props.$number * (360 / props.$totalSlices)}deg)`};
`;
