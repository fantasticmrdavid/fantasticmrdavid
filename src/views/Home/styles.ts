import styled, { css } from 'styled-components';
import { fadeIn } from 'styles/animations';
import theme from 'styles/theme';

interface ContainerProps {
  imgSrc: string,
  isLoading: boolean,
}

export const Container = styled.div<ContainerProps>`
  background-image: ${(props) => `url(${props.imgSrc})`};
  background-color: ${theme.colorLightGrey};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: 1s;
  animation: ${css`${fadeIn} 1s ease 1`};
  animation-fill-mode: forwards;
`;
