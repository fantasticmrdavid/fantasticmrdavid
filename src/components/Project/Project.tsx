import React, {
  memo,
  SyntheticEvent,
  useContext,
} from 'react';
import { useNavigate } from "react-router-dom"
import { ProjectData } from 'data/projects';
import { LoadingContext } from 'contexts/Loading';
import { WorkLocationContext } from 'contexts/WorkLocation';
import { Content } from './Content/Content';
import {
  Container,
  Tile,
  Image,
  TileContent,
  Title,
  Tagline,
  Close,
} from './project.styles';

export type ProjectProps = {
  nextProject: ProjectData,
  previousProject: ProjectData,
} & ProjectData;

export const Project = memo(
  (props: ProjectProps) => {
    const {
      title,
      tagline,
      target,
      images,
    } = props;
    const navigate = useNavigate()
    const { loading } = useContext(LoadingContext);
    const { workLocation, setWorkLocation } = useContext(WorkLocationContext);
    const isParentLoading = loading.images || loading.media;
    const isCurrent = workLocation && !isParentLoading ? workLocation === target : false;

    const handleTileClick = (e: SyntheticEvent) => {
      e.preventDefault();
      const newCurrent = isCurrent ? undefined : target;
      setWorkLocation(newCurrent);
      navigate(`/work/${newCurrent || ''}`);
    };

    const isOtherCurrent = isCurrent ? false : !!workLocation;

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
