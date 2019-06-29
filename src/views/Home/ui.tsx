import React, { memo } from 'react';
import * as styles from './styles';

interface Props {
  image: {
    name: string,
    src: string,
  },
  loading: boolean,
  updateImage: () => void,
}

const { Container } = styles;

export default memo(
  (props: Props) => {
    const { loading, image, updateImage } = props;
    updateImage();
    return <Container loading={loading} imgSrc={image.src} />;
  },
);
