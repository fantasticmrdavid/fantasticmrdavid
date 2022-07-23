import React, {
  memo,
  useCallback,
  SyntheticEvent,
  useContext,
} from 'react';
import { Project as ProjectProps } from 'data/projects';
import { LoadingContext } from 'contexts/Loading';
import { WorkLocationContext } from 'contexts/WorkLocation';
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
  nextProject: ProjectProps,
  previousProject: ProjectProps,
} & ProjectProps;

export default memo(
  (props: Props) => {
    const {
      title,
      tagline,
      target,
      images,
    } = props;
    const { loading } = useContext(LoadingContext);
    const { workLocation, setWorkLocation } = useContext(WorkLocationContext);
    const isCurrent = workLocation === target;
    const isParentLoading = loading.images || loading.media;

    const handleTileClick = useCallback((e: SyntheticEvent) => {
      e.preventDefault();
      const newCurrent = !!isCurrent ? undefined : target;
      setWorkLocation(newCurrent);
      window.history.pushState({}, title, `/work/${newCurrent || ''}`);
    }, [isCurrent, target]);

    const isOtherCurrent = !!isCurrent ? false : !!workLocation;

    return (
      <Container
        isCurrent={isCurrent}
        isOtherCurrent={isOtherCurrent}
      >
        <Tile
          isCurrent={isCurrent}
          isParentLoading={isParentLoading}
          target={target}
          isOtherCurrent={isOtherCurrent}
          onClick={handleTileClick}
        >
          <Image
            isCurrent={isCurrent}
            target={target}
            srcOn={images.tileOn}
            srcOff={images.tileOff}
          />
          <TileContent isCurrent={isCurrent}>
            <Title>{title}</Title>
            <Tagline>{tagline}</Tagline>
          </TileContent>
          <Close isCurrent={isCurrent}>X</Close>
        </Tile>
        <Content {...props} isCurrent={isCurrent} />
      </Container>
    );
  },
);
