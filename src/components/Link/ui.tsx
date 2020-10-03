import React, { memo } from 'react';
import { Link } from './styles';

interface Props {
  children?: any,
  href: string,
  onClick?: (...args: any[]) => any,
  target?: string,
  rel?: string,
}

export default memo((props: Props) => <Link {...props} />);
