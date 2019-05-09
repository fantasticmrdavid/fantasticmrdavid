import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

export const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: stretch;
  min-height: 100%;
  background-color: ${theme.colorDarkCharcoal};

  ${media.small`
    display: flex;
  `}
`;

export const Control = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: ${theme.colorSidebar};
  color: ${theme.colorTextPrimary};
  transition: 0.3s;

  ${media.small`
    width: 40%;
  `};

  ${media.medium`
    min-height: 100vh;
  `};
`;

export const Media = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: ${props => (props.location === 'work' ? '100vh' : undefined)};

  ${media.small`
    width: 60%;
  `}
`;

const Shutter = styled.div`
  position: absolute;
  right: 0px;
  z-index: 16;
  width: 100%;
  height: ${props => (props.firstMediaLoading ? '50%' : '0%')};
  transition: 0.3s;
  background: ${theme.colorBlack};
`;

export const ShutterTop = styled(Shutter)`
  top: 0px;
`;

export const ShutterBottom = styled(Shutter)`
  bottom: 0px;
`;

export const MediaLoadingMessage = styled.div`
  display: ${props => (props.firstMediaLoading ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fontHeading};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colorWhite};
  z-index: 17;
`;
