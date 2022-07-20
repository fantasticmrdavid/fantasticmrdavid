import React, { memo } from 'react';
import { Container } from './styles';
import { DispatchProps, StateProps } from './types';

type UiProps = DispatchProps & StateProps;

export default memo(
  ({ isLoading }: UiProps) => <Container isLoading={isLoading} imgSrc="/assets/images/legoFlinders.jpg" />,
);
