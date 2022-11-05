import React, { memo } from 'react';
import {
  OuterFrame,
  Screen,
  HomeButton,
  UpButton,
  DownButton,
  Image,
} from './mobile.styles';

export interface MobileProps {
  title: string,
  thumbnail: string,
  url?: string | undefined,
}

export const Mobile = memo(
  ({ title, thumbnail, url }: MobileProps) => {

    return (
      <OuterFrame>
        <Screen>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image src={thumbnail} alt={title} />
          </a>
        </Screen>
        <HomeButton />
        <UpButton />
        <DownButton />
      </OuterFrame>
    );
  },
);
