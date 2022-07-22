import React, { memo, useCallback, useContext } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
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

    const { setWorkLocation } = useContext(WorkLocationContext);

    const {
      images,
      target,
      title,
    } = project;

    const handleClick = useCallback(() => {
      setWorkLocation(target);
    }, [target]);

    return (
      <Container type={type} onClick={handleClick} srcOn={images.tileOn}>
        <Background src={images.tileOff} />
        <Gradient type={type} />
        <Content>
          { type === 'back' && <Icon icon={faAngleLeft} />}
          <Title>{title}</Title>
          { type === 'next' && <Icon icon={faAngleRight} />}
        </Content>
      </Container>
    );
  },
);
