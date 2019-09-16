import React, { memo, useCallback } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Project as ProjectProps } from 'data/projects';
import * as styles from './styles';

export interface Props {
  label: string,
  project: ProjectProps,
  type: string,
  updateCurrent: (target: string | undefined) => void,
}

const {
  Background,
  Container,
  Content,
  Gradient,
  Icon,
  Title,
} = styles;

export default memo(
  (props: Props) => {
    const {
      project,
      type,
      updateCurrent,
    } = props;

    const {
      images,
      target,
      title,
    } = project;

    const handleClick = useCallback(() => {
      updateCurrent(target);
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
