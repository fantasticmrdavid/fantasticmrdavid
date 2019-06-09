import React from 'react';
import * as styles from './styles';

interface Props {
  children?: any,
  href: string,
  onClick?: (...args: any[]) => any,
  target?: string,
  rel?: string,
}

export default (props: Props) => {
  const { Link } = styles;
  return <Link {...props} />;
};
