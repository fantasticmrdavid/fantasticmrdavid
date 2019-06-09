import React from 'react';
import * as styles from './styles';

interface Props {
  loading: boolean,
}

export default ({ loading }: Props) => {
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

  return (
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
  );
};
