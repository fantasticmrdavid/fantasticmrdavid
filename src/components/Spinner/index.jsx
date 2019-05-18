import React, { memo } from 'react';
import * as styles from './styles';

export default memo(() => {
  const { Container, Spinner } = styles;
  return <Container><Spinner /></Container>;
});
