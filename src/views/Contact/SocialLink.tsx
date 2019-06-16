import React, { memo, useCallback } from 'react';
import ReactGA from 'react-ga';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as styles from './styles';

export interface Props {
  title: string,
  href: string,
  icon: string | IconDefinition,
}

export default memo(
  ({ title, href, icon }: Props) => {
    const { Icon } = styles;
    const handleClick = useCallback(() => ReactGA.event({
      category: 'Contact',
      action: 'Social link Click',
      label: title,
    }), [title]);

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" title={title} onClick={handleClick}>
        <Icon icon={icon} />
      </a>
    );
  },
);
