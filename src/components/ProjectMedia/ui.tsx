import React from 'react';
import Mobile, { Props as MobileProps } from './Mobile';
import Desktop, { Props as DesktopProps } from './Desktop';
import Image, { Props as ImageProps } from './Image';

export interface Props {
  platform: string,
  type: string,
}

export default (props: Props & MobileProps & ImageProps & DesktopProps) => {
  const { type, platform = null } = props;

  if (platform === 'mobile') return <Mobile {...props} />;
  if (platform === 'desktop') return <Desktop {...props} />;
  if (type === 'image') return <Image {...props} />;

  return null;
};
