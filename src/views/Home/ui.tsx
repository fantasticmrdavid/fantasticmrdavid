import React, { memo } from 'react';
import * as styles from './styles';
import { DispatchProps, StateProps } from './types';

type UiProps = DispatchProps & StateProps;

const { Container } = styles;

export default memo(
  (props: UiProps) => {
    const { isLoading, image, updateImage } = props;
    updateImage();
    return <Container isLoading={isLoading} imgSrc={image.src} />;
  },
);
