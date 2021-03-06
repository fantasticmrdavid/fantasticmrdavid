import React, { PureComponent } from 'react';
import ScopeSpinner from 'components/ScopeSpinner';
import ImagePreloader from 'components/ImagePreloader';
import Project from 'components/Project';
import projects, { Project as ProjectProps } from 'data/projects';
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

export default class Work extends PureComponent<UiProps> {
  constructor(props: UiProps) {
    super(props);
    const { startImagesLoading } = props;
    startImagesLoading();
  }

  componentDidMount() {
    const { setTarget, target } = this.props;

    if (target) setTarget(target);
  }

  render() {
    const { isLoading, stopLoading } = this.props;

    return (
      <Container>
        <LoadingContainer isLoading={isLoading}>
          { isLoading ? <ScopeSpinner /> : <SpinnerPlaceholder /> }
          { images.length > 0 && <ImagePreloader images={images} completedAction={stopLoading} /> }
        </LoadingContainer>

        <ProjectListContainer isLoading={isLoading}>
          {
            projects.map((p: ProjectProps) => <Project {...p} key={`Project_${p.target}`} />)
          }
        </ProjectListContainer>
      </Container>
    );
  }
}
