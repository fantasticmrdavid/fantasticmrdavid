import React, { memo, useCallback } from 'react';
import Content from './Content';
import * as styles from './styles';

export interface Props {
  current: string,
  description: string,
  products: string,
  title: string,
  tagline: string,
  target: string,
  technologies: string,
  images: {
    tileOn: string,
    tileOff: string,
  },
  parentLoading: boolean,
  isCurrent: boolean,
  updateCurrent: (target: string | undefined) => void,
}

export default memo(
  (props: Props) => {
    const {
      current,
      title,
      tagline,
      target,
      images,
      parentLoading,
      isCurrent,
      updateCurrent,
    } = props;

    const handleTileClick = useCallback(e => {
      e.preventDefault();
      const newCurrent = !!isCurrent ? undefined : target;
      updateCurrent(newCurrent);
    }, [isCurrent, target]);

    const isOtherCurrent = !!isCurrent ? false : !!current;

    const {
      Container,
      Tile,
      Image,
      TileContent,
      Title,
      Tagline,
      Close,
    } = styles;

    return (
      <Container
        current={isCurrent}
        otherCurrent={isOtherCurrent}
      >
        <Tile
          current={isCurrent}
          parentLoading={parentLoading}
          target={target}
          otherCurrent={isOtherCurrent}
          onClick={handleTileClick}
        >
          <Image
            current={isCurrent}
            target={target}
            srcOn={images.tileOn}
            srcOff={images.tileOff}
          />
          <TileContent current={isCurrent}>
            <Title>{title}</Title>
            <Tagline>{tagline}</Tagline>
          </TileContent>
          <Close current={isCurrent}>X</Close>
        </Tile>
        <Content {...props} />
      </Container>
    );
  },
);
