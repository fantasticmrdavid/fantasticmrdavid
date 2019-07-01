import React, { memo } from 'react';
import * as styles from './styles';

interface Props {
  direction?: string,
}

const { Tracer } = styles;

export default memo(
  ({ direction }: Props) => {
    return <Tracer direction={direction} />;
  },
);
