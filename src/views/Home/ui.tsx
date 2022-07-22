import React, { memo, useContext } from 'react';
import { LoadingContext } from 'contexts/Loading';
import { Container } from './styles';

export default memo(
  () => {
    const { getIsLoading } = useContext(LoadingContext);
    return <Container isLoading={getIsLoading()} imgSrc="/assets/images/legoFlinders.jpg" />;
  },
);
