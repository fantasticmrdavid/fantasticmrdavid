import React, {
  memo,
  SyntheticEvent,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom"
import { ProjectData } from 'data/projects';
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
  isParentLoading: boolean,
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
      isParentLoading,
    } = props;
    const navigate = useNavigate()
    const { workLocation, setWorkLocation } = useContext(WorkLocationContext);
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
        $isCurrent={isCurrent}
        $isOtherCurrent={isOtherCurrent}
      >
        <Tile
          $isCurrent={isCurrent}
          $isParentLoading={isParentLoading}
          $target={target}
          $isOtherCurrent={isOtherCurrent}
          onClick={handleTileClick}
        >
          <Image
<<<<<<< Updated upstream
            $isCurrent={isCurrent}
            $target={target}
            $srcOn={images.tileOn}
            $srcOff={images.tileOff}
=======
            isCurrent={isCurrent}
            target={target}
            src={images.tile}
>>>>>>> Stashed changes
          />
          <TileContent $isCurrent={isCurrent}>
            <Title>{title}</Title>
            <Tagline>{tagline}</Tagline>
          </TileContent>
          <Close $isCurrent={isCurrent}>X</Close>
        </Tile>
        <Content {...props} isCurrent={isCurrent} />
      </Container>
    );
  },
);
