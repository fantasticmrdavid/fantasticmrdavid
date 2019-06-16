import React, { PureComponent } from 'react';
import * as styles from './styles';

interface Props {
  image: {
    name: string,
    src: string,
  },
  loading: boolean,
  updateImage: () => void,
  stopLoading: () => void,
}

export default class Ui extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    const { updateImage } = props;
    updateImage();
  }

  componentDidMount() {
    const { image, stopLoading } = this.props;
    const bg = new Image();
    bg.onload = () => {
      stopLoading();
    };
    bg.src = image.src;

    return bg;
  }

  render() {
    const { loading, image } = this.props;
    const { Container } = styles;
    return <Container loading={loading} imgSrc={image.src} />;
  }
}
