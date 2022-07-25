import React, { memo } from 'react';
import Mobile, { Props as MobileProps } from './Mobile';
import Desktop, { Props as DesktopProps } from './Desktop';
import Image, { Props as ImageProps } from './Image';

type UiProps = {
    platform: string,
    type: string,
} & MobileProps & ImageProps & DesktopProps;

export default memo(
  (props: UiProps) => {
    const { type, platform = null } = props;

    if (platform === 'mobile') return <Mobile {...props} />;
    if (platform === 'desktop') return <Desktop {...props} />;
    if (type === 'image') return <Image {...props} />;

    return null;
  },
);
