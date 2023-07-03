import React, { memo } from "react";
import { Tracer } from "./borderTracer.styles";

interface BorderTracerProps {
  direction?: string;
  cycleColor?: boolean;
}

export const BorderTracer = memo(
  ({ direction, cycleColor }: BorderTracerProps) => {
    return <Tracer $direction={direction} $cycleColor={cycleColor} />;
  }
);
