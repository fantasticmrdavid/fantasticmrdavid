import React, { memo } from 'react';
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
