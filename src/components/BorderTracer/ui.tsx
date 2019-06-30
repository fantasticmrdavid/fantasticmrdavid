import React, { memo } from 'react';
import * as styles from './styles';

interface Props {
  direction?: string,
}

export default memo(
  ({ direction }: Props) => {
    const { Tracer } = styles;
    return <Tracer direction={direction} />;
  },
);
