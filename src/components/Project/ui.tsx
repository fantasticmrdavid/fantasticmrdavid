import React, { memo, useCallback, SyntheticEvent } from 'react';
import { Project as ProjectProps } from 'data/projects';
import Content from './Content';
import * as styles from './styles';

export type Props = {
  current: string,
  parentLoading: boolean,
  isCurrent: boolean,
  nextProject: ProjectProps,
  previousProject: ProjectProps,
  updateCurrent: (target: string | undefined) => void,
} & ProjectProps;

const {
  Container,
  Tile,
  Image,
  TileContent,
  Title,
  Tagline,
  Close,
} = styles;

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

    const handleTileClick = useCallback((e: SyntheticEvent) => {
      e.preventDefault();
      const newCurrent = !!isCurrent ? undefined : target;
      updateCurrent(newCurrent);
    }, [isCurrent, target]);

    const isOtherCurrent = !!isCurrent ? false : !!current;

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
