import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Cube = ({ loading }) => {
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

Cube.propTypes = {
  loading: PropTypes.bool,
};

export default Cube;
