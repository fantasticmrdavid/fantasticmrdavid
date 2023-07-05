import React, {
  memo,
  SyntheticEvent,
  useContext, useState
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
import { BorderTracer } from "components/BorderTracer/BorderTracer";

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
    const [ isHovering, setIsHovering ] = useState(false)
    const { workLocation, setWorkLocation } = useContext(WorkLocationContext);
    const isCurrent = workLocation && !isParentLoading ? workLocation === target : false;

    const handleTileClick = (e: SyntheticEvent) => {
      e.preventDefault();
      const newCurrent = isCurrent ? undefined : target;
      setWorkLocation(newCurrent);
      navigate(`/work/${newCurrent || ''}`);
    };

    const isOtherCurrent = isCurrent ? false : !!workLocation;

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
      <Container
        $isCurrent={isCurrent}
        $isOtherCurrent={isOtherCurrent}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Tile
          $isCurrent={isCurrent}
          $isParentLoading={isParentLoading}
          $target={target}
          $isOtherCurrent={isOtherCurrent}
          onClick={handleTileClick}
        >
            {!isCurrent && isHovering && (
              <>
                <BorderTracer />
                <BorderTracer direction={"left"} />
              </>
            )}
            <Image
              $isCurrent={isCurrent}
              $target={target}
              $src={images.tile}
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
