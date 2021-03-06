import React, { memo, useCallback } from 'react';
import ReactGA from 'react-ga';
import {
  Container,
  OuterFrame,
  Screen,
  Image,
  Stand,
  Base,
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
      action: 'Media Desktop Website click',
      label: title,
    }), [title]);

    return (
      <Container>
        <OuterFrame>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Screen>
              <Image src={thumbnail} alt={title} onClick={handleClick} />
            </Screen>
          </a>
        </OuterFrame>
        <Stand />
        <Base />
      </Container>
    );
  },
);
