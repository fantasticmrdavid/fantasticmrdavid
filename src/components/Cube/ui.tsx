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
        <Front><BorderTracer direction="left" /></Front>
        <Back><BorderTracer /></Back>
        <Top />
        <Bottom><BorderTracer /></Bottom>
        <Left><BorderTracer direction="left" /></Left>
        <Right><BorderTracer /></Right>
      </Polygon>
    </Container>
  ),
);
