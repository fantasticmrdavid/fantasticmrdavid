import React, { memo, useContext, useEffect } from 'react';
import { ScopeSpinner } from 'components/ScopeSpinner/ScopeSpinner';
import ImagePreloader from 'components/ImagePreloader';
import Project from 'components/Project';
import projects, { Project as ProjectProps } from 'data/projects';
import { LoadingContext } from 'contexts/Loading';
import { WorkLocationContext } from 'contexts/WorkLocation';
import {
  Container,
  LoadingContainer,
  ProjectListContainer,
  SpinnerPlaceholder,
} from './styles';

type UiProps = { target?: string };

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
  const { target } = props;
  const { getIsLoading, stopLoading } = useContext(LoadingContext);
  const { setWorkLocation } = useContext(WorkLocationContext);

  useEffect(() => {
    if (target) setWorkLocation(target);
  }, [target])

  const isLoading = getIsLoading();

  return (
    <Container>
      <LoadingContainer isLoading={isLoading}>
        { isLoading ? <ScopeSpinner /> : <SpinnerPlaceholder /> }
        { images.length > 0
          && (
            <ImagePreloader
              images={images}
              completedAction={() => stopLoading()}
            />
          )}
      </LoadingContainer>

      <ProjectListContainer isLoading={isLoading}>
        {
          projects.map((p: ProjectProps, index) => {
            const isLast = index === projects.length - 1;
            const isFirst = index === 0;
            return (
              <Project
                {...p}
                key={`Project_${p.target}`}
                nextProject={projects[isLast ? 0 : index + 1]}
                previousProject={projects[isFirst ? projects.length - 1 : index - 1]}
              />
            );
          })
        }
      </ProjectListContainer>
    </Container>
  );
});
