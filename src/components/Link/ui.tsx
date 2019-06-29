import React, { memo } from 'react';
import * as styles from './styles';

interface Props {
  children?: any,
  href: string,
  onClick?: (...args: any[]) => any,
  target?: string,
  rel?: string,
}

const { Link } = styles;

export default memo((props: Props) => <Link {...props} />);
