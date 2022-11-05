import React, { memo } from 'react';
import { Mobile, MobileProps } from './Mobile/Mobile';
import { Desktop, DesktopProps } from './Desktop/Desktop';
import { Image, ImageProps } from './Image/Image';

type ProjectMediaProps = {
    platform: string,
    type: string,
} & MobileProps & ImageProps & DesktopProps;

export const ProjectMedia = memo(
  (props: ProjectMediaProps) => {
    const { type, platform = null } = props;

    if (platform === 'mobile') return <Mobile {...props} />;
    if (platform === 'desktop') return <Desktop {...props} />;
    if (type === 'image') return <Image {...props} />;

    return null;
  },
);
