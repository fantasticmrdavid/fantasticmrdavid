import React, { memo } from "react";
import { BorderTracer } from "components/BorderTracer/BorderTracer";
import {
  Container,
  Polygon,
  Front,
  Back,
  Left,
  Right,
  Top,
  Bottom,
} from "./cube.styles";

export interface CubeProps {
  isLoading: boolean;
}

export const Cube = memo(({ isLoading }: CubeProps) => (
  <Container $isLoading={isLoading}>
    <Polygon>
      <Front>
        <BorderTracer direction="left" cycleColor />
      </Front>
      <Back>
        <BorderTracer cycleColor />
      </Back>
      <Top />
      <Bottom>
        <BorderTracer cycleColor />
      </Bottom>
      <Left>
        <BorderTracer direction="left" cycleColor />
      </Left>
      <Right>
        <BorderTracer cycleColor />
      </Right>
    </Polygon>
  </Container>
));
