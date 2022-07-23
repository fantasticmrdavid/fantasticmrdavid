import React, { memo } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icon } from './styles';

export interface Props {
  title: string,
  href: string,
  icon: string | IconDefinition,
}

export default memo(
  ({ title, href, icon }: Props) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
        <Icon icon={icon} />
      </a>
    );
  },
);
