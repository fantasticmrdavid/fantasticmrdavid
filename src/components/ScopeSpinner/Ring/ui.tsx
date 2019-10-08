import React, { memo } from 'react';
import * as styles from './styles';

const {
  Container,
  Ring,
  Mask,
} = styles;

interface Props {
  rotateDirection?: string,
  size: number,
  strokeWidth: number,
  minSlice: number,
  maxSlice: number,
  speed: number,
}

export default memo(
  ({
    minSlice,
    maxSlice,
    size,
    rotateDirection = 'c',
    strokeWidth,
    speed,
  }: Props) => (
    <Container size={size} rotateDirection={rotateDirection} speed={speed}>
      <Mask minSlice={minSlice} maxSlice={maxSlice} speed={speed}>
        <Ring size={size} strokeWidth={strokeWidth} />
      </Mask>
    </Container>
  ),
);
