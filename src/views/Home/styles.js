import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  background-image: ${props => `url(${props.imgSrc})`};
  background-color: ${theme.colorLightGrey};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  opacity: ${props => (props.loading ? 0 : 1)};
  transition: 1s;
`;
