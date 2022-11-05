import React, { memo } from 'react';
import { Icon } from './contact.styles';
import {IconType} from "react-icons";

export interface Props {
  title: string,
  href: string,
  icon: string | IconType,
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
