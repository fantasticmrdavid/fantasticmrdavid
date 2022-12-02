import React, { memo } from 'react';
import { Container } from './home.styles';

interface HomeProps {
  isLoading: boolean
}

export const Home: React.FC<HomeProps> = memo(({ isLoading }) => {
  return <Container isLoading={isLoading} imgSrc="/assets/images/legoFlinders.jpg" />;
});
