import React, {
  memo,
  useCallback,
  SyntheticEvent,
  useContext,
} from 'react';
import { Project as ProjectProps } from 'data/projects';
import { LoadingContext } from 'contexts/Loading';
import Content from './Content';
import {
  Container,
  Tile,
  Image,
  TileContent,
  Title,
  Tagline,
  Close,
} from './styles';

export type Props = {
  current: string,
  parentLoading: boolean,
  isCurrent: boolean,
  nextProject: ProjectProps,
  previousProject: ProjectProps,
  updateCurrent: (target: string | undefined) => void,
} & ProjectProps;

export default memo(
  (props: Props) => {
    const {
      current,
      title,
      tagline,
      target,
      images,
      isCurrent,
      updateCurrent,
    } = props;
    const { loading } = useContext(LoadingContext);
    const parentLoading = loading.images || loading.media;

    const handleTileClick = useCallback((e: SyntheticEvent) => {
      e.preventDefault();
      const newCurrent = !!isCurrent ? undefined : target;
      updateCurrent(newCurrent);
      window.history.pushState({}, title, `/work/${newCurrent || ''}`);
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
