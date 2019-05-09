import styled, { css, keyframes } from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';
import ComponentIcon from 'components/Icon';

const shutterClose = keyframes`
  0% { height: 0%; opacity: 0; }
  100% { height: 51%; opacity: 1; }
`;

export const Container = styled.div`
  position: relative;
  opacity: 1;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  padding: 3em 0;
  background: ${theme.colorLightGrey};

  ${media.small`
    height: 100%;
    padding: 0;
  `};
`;

export const Content = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 17;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  color: ${theme.colorTextPrimary};
  font-size: 1.5em;
`;

export const Email = styled.div`
  a {
    font-family: ${theme.fontHeading};
    color: ${theme.colorLightGrey};
    text-decoration: none;
    transition: 0.3s;

    ${media.medium`
      &:hover {
        color: white;
      }
    `};
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25em;
  text-align: center;
  width: 100%;
`;

export const Icon = styled(ComponentIcon)`
  color: ${theme.colorLightGrey};
  margin: 0 3px;
  transition: 0.3s;

  ${media.medium`
    &:hover {
      color: ${theme.colorWhite};
    }
  `};
`;

const Shutter = styled.div`
  position: absolute;
  right: 0px;
  z-index: 16;
  width: 100%;
  transition: 0.3s;
  background: ${theme.colorBlack};
  animation: ${css`${shutterClose} 0.3s ease 1`};
  animation-fill-mode: forwards;
`;

export const ShutterTop = styled(Shutter)`
  top: 0px;
`;

export const ShutterBottom = styled(Shutter)`
  bottom: 0px;
`;