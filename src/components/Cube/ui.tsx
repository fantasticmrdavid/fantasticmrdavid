import React, { memo } from 'react';
import BorderTracer from 'components/BorderTracer';
import * as styles from './styles';
import { Props } from './types';

const {
  Container,
  Polygon,
  Front,
  Back,
  Left,
  Right,
  Top,
  Bottom,
} = styles;

export default memo(
  ({ isLoading }: Props) => (
    <Container isLoading={isLoading}>
      <Polygon>
        <Front><BorderTracer direction="left" cycleColor /></Front>
        <Back><BorderTracer cycleColor /></Back>
        <Top />
        <Bottom><BorderTracer cycleColor /></Bottom>
        <Left><BorderTracer direction="left" cycleColor /></Left>
        <Right><BorderTracer cycleColor /></Right>
      </Polygon>
    </Container>
  ),
);
