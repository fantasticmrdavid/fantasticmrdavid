import React, { memo } from "react";
import { Container, Circle, Mask } from "./ring.styles";

interface RingProps {
  rotateDirection?: string;
  size: number;
  strokeWidth: number;
  minSlice: number;
  maxSlice: number;
  maxScale?: number;
  speed: number;
}

export const Ring = memo(
  ({
    maxScale = 1,
    minSlice,
    maxSlice,
    size,
    rotateDirection = "c",
    strokeWidth,
    speed,
  }: RingProps) => (
    <Container
      $size={size}
      $rotateDirection={rotateDirection}
      $speed={speed}
      $maxScale={maxScale}
    >
      <Mask $minSlice={minSlice} $maxSlice={maxSlice} $speed={speed}>
        <Circle $size={size} $strokeWidth={strokeWidth} />
      </Mask>
    </Container>
  )
);
