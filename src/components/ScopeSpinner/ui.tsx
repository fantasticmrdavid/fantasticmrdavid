import React, { memo } from 'react';
import Ring from './Ring';
import Dial from './Dial';
import { Container } from './styles';

const RingList = [
  {
    size: 210,
    rotateDirection: 'cc',
    strokeWidth: 12,
    minSlice: 55,
    maxSlice: 80,
    maxScale: 1.1,
    speed: 2.5,
  },
  {
    size: 210,
    strokeWidth: 2,
    minSlice: 80,
    maxSlice: 98,
    maxScale: 1.1,
    speed: 2.5,
  },
  {
    size: 200,
    strokeWidth: 4,
    minSlice: 100,
    maxSlice: 100,
    maxScale: 1.1,
    speed: 2.5,
  },
  {
    size: 150,
    strokeWidth: 6,
    rotateDirection: 'cc',
    minSlice: 55,
    maxSlice: 90,
    maxScale: 1.2,
    speed: 1,
  },
  {
    size: 150,
    strokeWidth: 2,
    minSlice: 100,
    maxSlice: 100,
    maxScale: 1.2,
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
    maxScale: 1.5,
    speed: 0.5,
  },
  {
    size: 100,
    strokeWidth: 8,
    rotateDirection: 'cc',
    minSlice: 30,
    maxSlice: 30,
    maxScale: 1.5,
    speed: 0.5,
  },
];

const DialList = [
  {
    id: 'dial1',
    char: '■',
    maxScale: 1.3,
    size: 145,
    rotateDirection: 'cc',
    minSlice: 100,
    maxSlice: 100,
    speed: 4,
  },
  {
    id: 'dial2',
    size: 130,
    maxScale: 1.1,
    minSlice: 75,
    maxSlice: 95,
    speed: 4,
  },
];

export default memo(
  () => (
    <Container>
      { RingList.map((r: any, i: number) => <Ring {...r} key={`ring_${i.toString()}`} />) }
      { DialList.map((d: any, i: number) => <Dial {...d} key={`dial_${i.toString()}`} />) }
    </Container>
  ),
);
