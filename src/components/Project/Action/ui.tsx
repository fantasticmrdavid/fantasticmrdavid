import React, { memo, useCallback, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { Project as ProjectProps } from 'data/projects';
import { WorkLocationContext } from 'contexts/WorkLocation';
import {
  Background,
  Container,
  Content,
  Gradient,
  Icon,
  Title,
} from './styles';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

export interface Props {
  label: string,
  project: ProjectProps,
  type: string,
}

export default memo(
  (props: Props) => {
    const {
      project,
      type,
    } = props;

    const navigate = useNavigate()
    const { setWorkLocation } = useContext(WorkLocationContext);

    const {
      images,
      target,
      title,
    } = project;

    const handleClick = useCallback(() => {
      setWorkLocation(target);
      navigate(`/work/${target}`)
    }, [target]);

    return (
      <Container type={type} onClick={handleClick} srcOn={images.tileOn}>
        <Background src={images.tileOff} />
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
