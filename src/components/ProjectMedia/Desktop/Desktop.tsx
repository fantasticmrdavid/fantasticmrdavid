import React, { memo } from 'react';
import {
  Container,
  OuterFrame,
  Screen,
  Image,
  Stand,
  Base,
} from './desktop.styles';

export interface DesktopProps {
  title: string,
  thumbnail: string,
  url?: string | undefined,
}

export const Desktop = memo(
  ({ title, thumbnail, url }: DesktopProps) => {

    return (
      <Container>
        <OuterFrame>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Screen>
              <Image src={thumbnail} alt={title} />
            </Screen>
          </a>
        </OuterFrame>
        <Stand />
        <Base />
      </Container>
    );
  },
);
