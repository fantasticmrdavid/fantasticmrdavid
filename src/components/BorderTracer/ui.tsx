import React, { memo } from 'react';
import { Tracer } from './styles';

interface Props {
  direction?: string,
  cycleColor?: boolean,
}

export default memo(
  ({ direction, cycleColor }: Props) => {
    return <Tracer direction={direction} cycleColor={cycleColor} />;
  },
);
