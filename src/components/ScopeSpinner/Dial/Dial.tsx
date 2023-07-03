import React, { memo } from "react";
import { Container, Ring, Mask, Tick } from "./dial.styles";

interface DialProps {
  char: string;
  id: string;
  rotateDirection?: string;
  size: number;
  minSlice: number;
  maxSlice: number;
  maxScale?: number;
  speed: number;
}

const totalSlices = 64;

export const Dial = memo(
  ({
    char = "|",
    id,
    maxScale = 1,
    minSlice,
    maxSlice,
    size,
    rotateDirection = "c",
    speed,
  }: DialProps) => (
    <Container
      $size={size}
      $rotateDirection={rotateDirection}
      $speed={speed}
      $maxScale={maxScale}
    >
      <Mask $minSlice={minSlice} $maxSlice={maxSlice} $speed={speed}>
        <Ring $size={size}>
          {Array(totalSlices)
            .fill(char)
            .map((c: string, i: number) => (
              <Tick
                key={`dial_tick_${id}_${i.toString()}`}
                $number={i}
                $totalSlices={totalSlices}
              >
                {c}
              </Tick>
            ))}
        </Ring>
      </Mask>
    </Container>
  )
);
