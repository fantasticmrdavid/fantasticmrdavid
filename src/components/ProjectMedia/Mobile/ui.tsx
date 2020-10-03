import React, { memo, useCallback } from 'react';
import ReactGA from 'react-ga';
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
    const handleClick = useCallback(() => ReactGA.event({
      category: 'Project',
      action: 'Media Mobile Website click',
      label: title,
    }), [title]);

    return (
      <OuterFrame>
        <Screen>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image src={thumbnail} alt={title} onClick={handleClick} />
          </a>
        </Screen>
        <HomeButton />
        <UpButton />
        <DownButton />
      </OuterFrame>
    );
  },
);
