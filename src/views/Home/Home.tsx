import React, { memo, useEffect, useState } from "react";
import { Container } from './home.styles';

interface HomeProps {
  isLoading: boolean
}

const fullImgSrc = "/assets/images/legoFlinders.jpg"

export const Home: React.FC<HomeProps> = memo(({ isLoading }) => {
  const [imgSrc, setImgSrc] = useState("/assets/images/legoFlinders_low.jpg")
  useEffect(() => {
    const img = new Image();
    img.src = fullImgSrc;
    img.onload = () => {
      setImgSrc(fullImgSrc);
    };
  }, [fullImgSrc])
  return <Container isLoading={isLoading} imgSrc={imgSrc} />;
});
