import React, { PureComponent } from 'react';
import Spinner from 'components/Spinner';
import ImagePreloader from 'components/ImagePreloader';
import Project from 'components/Project';
import projects, { Project as ProjectProps } from 'data/projects';
import * as styles from './styles';

interface Props {
  startImagesLoading: () => void,
  stopLoading: () => void,
  loading: boolean,
}

const {
  Container,
  LoadingContainer,
  ProjectListContainer,
  SpinnerPlaceholder,
} = styles;

export default class WorkMedia extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    const { startImagesLoading } = props;
    startImagesLoading();
  }

  getImages() {
    let images: string[] = [];

    projects.map((p: ProjectProps) => {
      if (!!p.images) {
        const newImages = (Object.keys(p.images)).map((key: string) => p.images[key]);
        images = [...images, ...newImages];
      }

      return p;
    });

    return images;
  }

  render() {
    const { loading, stopLoading } = this.props;
    const images = this.getImages();

    return (
      <Container>
        <LoadingContainer loading={loading}>
          { loading ? <Spinner /> : <SpinnerPlaceholder /> }
          { images.length > 0 && <ImagePreloader images={images} completedAction={stopLoading} /> }
        </LoadingContainer>

        <ProjectListContainer loading={loading}>
          {
            projects.map(p => <Project {...p} key={`Project_${p.target}`} />)
          }
        </ProjectListContainer>
      </Container>
    );
  }
}
