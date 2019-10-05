import React, { memo } from 'react';
import BorderTracer from 'components/BorderTracer';
import * as styles from './styles';

interface Props {
  loading: boolean,
}

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
  ({ loading }: Props) => (
    <Container loading={loading}>
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
