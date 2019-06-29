import React, { memo } from 'react';
import * as styles from './styles';

const { Container, Spinner } = styles;

export default memo(() => {
  return <Container><Spinner /></Container>;
});
