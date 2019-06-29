import React, { memo } from 'react';
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
        <Front />
        <Back />
        <Top />
        <Bottom />
        <Left />
        <Right />
      </Polygon>
    </Container>
  ),
);
