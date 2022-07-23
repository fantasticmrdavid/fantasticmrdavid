import React, { memo } from 'react';
import {
  OuterFrame,
  Screen,
  HomeButton,
  UpButton,
  DownButton,
  Image,
} from './styles';

export interface Props {
  title: string,
  thumbnail: string,
  url?: string | undefined,
}

export default memo(
  ({ title, thumbnail, url }: Props) => {

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
