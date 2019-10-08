import React, { memo } from 'react';
import Ring from './Ring';
import * as styles from './styles';

const {
  Container,
} = styles;

const RingList = [
  {
    size: 210,
    rotateDirection: 'cc',
    strokeWidth: 12,
    minSlice: 65,
    maxSlice: 90,
    speed: 2.5,
  },
  {
    size: 200,
    strokeWidth: 4,
    minSlice: 100,
    maxSlice: 100,
    speed: 2.5,
  },
  {
    size: 150,
    strokeWidth: 10,
    rotateDirection: 'cc',
    minSlice: 55,
    maxSlice: 90,
    speed: 1,
  },
  {
    size: 150,
    strokeWidth: 2,
    minSlice: 100,
    maxSlice: 100,
    speed: 1,
  },
  {
    size: 120,
    rotateDirection: 'cc',
    strokeWidth: 20,
    minSlice: 45,
    maxSlice: 50,
    speed: 1,
  },
  {
    size: 100,
    strokeWidth: 3,
    rotateDirection: 'cc',
    minSlice: 70,
    maxSlice: 90,
    speed: 0.5,
  },
  {
    size: 100,
    strokeWidth: 8,
    rotateDirection: 'cc',
    minSlice: 30,
    maxSlice: 30,
    speed: 0.5,
  },
];

export default memo(
  () => (
    <Container>
      { RingList.map((r: any, i: number) => <Ring {...r} key={`ring_${i.toString()}`} />) }
    </Container>
  ),
);
