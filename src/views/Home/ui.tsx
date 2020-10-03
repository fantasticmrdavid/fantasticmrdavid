import React, { memo } from 'react';
import { Container } from './styles';
import { DispatchProps, StateProps } from './types';

type UiProps = DispatchProps & StateProps;

export default memo(
  (props: UiProps) => {
    const { isLoading, image, updateImage } = props;
    updateImage();
    return <Container isLoading={isLoading} imgSrc={image.src} />;
  },
);
