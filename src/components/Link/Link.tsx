import React, { memo } from 'react';
import { Link as StyledLink } from './link.styles';

interface LinkProps {
  children?: any,
  href: string,
  onClick?: (...args: any[]) => any,
  target?: string,
  rel?: string,
}

export const Link = memo((props: LinkProps) => <StyledLink {...props} />);
