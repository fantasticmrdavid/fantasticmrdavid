import React, { memo, useContext, useEffect } from 'react';
import ScopeSpinner from 'components/ScopeSpinner';
import ImagePreloader from 'components/ImagePreloader';
import Project from 'components/Project';
import projects, { Project as ProjectProps } from 'data/projects';
import { LoadingContext } from 'contexts/Loading';
import {
  Container,
  LoadingContainer,
  ProjectListContainer,
  SpinnerPlaceholder,
} from './styles';
import { ContainerProps, DispatchProps, StateProps } from './types';

type UiProps = ContainerProps & DispatchProps & StateProps;

const getImages = () => {
  let images: string[] = [];

  projects.map((p: ProjectProps) => {
    if (!!p.images) {
      const newImages = (Object.keys(p.images)).map((key: string) => p.images[key]);
      images = [...images, ...newImages];
    }

    return p;
  });

  return images;
};

const images = getImages();

export default memo((props: UiProps) => {
  const {
    target,
    setTarget,
  } = props;
  const { getIsLoading, loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading({ ...loading, images: true });
  }, [target]);

  if (target) setTarget(target);
  const isLoading = getIsLoading();

  return (
    <Container>
      <LoadingContainer isLoading={isLoading}>
        { isLoading ? <ScopeSpinner /> : <SpinnerPlaceholder /> }
        { images.length > 0
          && (
            <ImagePreloader
              images={images}
              completedAction={() => setLoading({ ...loading, images: false, media: false })}
            />
          )}
      </LoadingContainer>

      <ProjectListContainer isLoading={isLoading}>
        {
          projects.map((p: ProjectProps) => <Project {...p} key={`Project_${p.target}`} />)
        }
      </ProjectListContainer>
    </Container>
  );
});
