import React, { memo } from 'react';
import * as styles from './styles';

interface Props {
  direction?: string,
  cycleColor?: boolean,
}

const { Tracer } = styles;

export default memo(
  ({ direction, cycleColor }: Props) => {
    return <Tracer direction={direction} cycleColor={cycleColor} />;
  },
);
