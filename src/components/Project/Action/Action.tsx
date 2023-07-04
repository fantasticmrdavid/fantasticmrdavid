import React, { memo, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectData } from "data/projects";
import { WorkLocationContext } from "contexts/WorkLocation";
import {
  Background,
  Container,
  Content,
  Gradient,
  Icon,
  Title,
} from "./action.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export interface ActionProps {
  label: string;
  project: ProjectData;
  type: string;
}

export const Action = memo((props: ActionProps) => {
  const { project, type } = props;

  const navigate = useNavigate();
  const { setWorkLocation } = useContext(WorkLocationContext);

  const { images, target, title } = project;

  const handleClick = useCallback(() => {
    setWorkLocation(target);
    navigate(`/work/${target}`);
  }, [target]);

<<<<<<< Updated upstream
  return (
    <Container $type={type} onClick={handleClick} $srcOn={images.tileOn}>
      <Background $src={images.tileOff} />
      <Gradient $type={type} />
      <Content>
        {type === "back" && <Icon icon={FaAngleLeft} />}
        <Title>{title}</Title>
        {type === "next" && <Icon icon={FaAngleRight} />}
      </Content>
    </Container>
  );
});
=======
    return (
      <Container type={type} onClick={handleClick}>
        <Background src={images.tile} />
        <Gradient type={type} />
        <Content>
          { type === 'back' && <Icon icon={FaAngleLeft} />}
          <Title>{title}</Title>
          { type === 'next' && <Icon icon={FaAngleRight} />}
        </Content>
      </Container>
    );
  },
);
>>>>>>> Stashed changes
