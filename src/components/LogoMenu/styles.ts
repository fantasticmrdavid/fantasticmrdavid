import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

interface ContainerProps {
  isOpen: boolean,
}

interface CtaProps {
  isOpen: boolean,
}

interface NavProps {
  isOpen: boolean,
}

interface SubtitleProps {
  isOpen: boolean,
}

interface CogIconWrapperProps {
  isOpen?: boolean,
}

export const Container = styled.nav<ContainerProps>`
  position: relative;
  font-family: ${theme.fontHeading};
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  cursor: pointer;
  min-height: 0px;
  padding: 1.5em 0;
  padding-bottom: ${(props) => (props.isOpen ? '0px' : undefined)};

  ${media.small`
    min-height: 100%;
    padding: 0;
  `};
`;

export const Title = styled.h1`
  padding: 0 4rem 0 2rem;
  font-size: 1.8rem;

  ${media.small`
    font-size: 2rem;
  `};
`;

export const Cta = styled.a<CtaProps>`
  position: absolute;
  display: ${(props) => (props.isOpen ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  top: calc(50% - 25px);
  right: 2rem;
  border-radius: 50%;
  border: ${`2px solid ${theme.colorDarkGrey}`};
  font-size: 2rem;
  color: ${theme.colorDarkGrey};
  width: 50px;
  height: 50px;
  z-index: ${(props) => (props.isOpen ? -1 : 1)};
  opacity: ${(props) => (props.isOpen ? 'undefined' : 1)};
  transition: 0.3s;

  ${media.small`
    display: flex;
  `};

  ${media.hover`
    &:hover {
      background: ${theme.colorCharcoal};
    }
  `};
`;

export const Nav = styled.nav<NavProps>`
  flex-wrap: wrap;
  font-size: 1.5rem;
  width: 100%;
  margin: ${(props) => (props.isOpen ? '0.5rem 0' : undefined)};
  max-height: ${(props) => (props.isOpen ? '1000px' : '0px')};
  transition: 0.5s;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  overflow: hidden;
  background-color: #444;
  border-top: ${(props) => (props.isOpen ? '1px solid #333' : undefined)};
  border-bottom: ${(props) => (props.isOpen ? '1px solid #333' : undefined)};
`;

export const Subtitle = styled.div<SubtitleProps>`
  display: ${(props) => (props.isOpen ? 'none' : 'flex')};
  position: relative;
  font-size: 1rem;
  width: 100%;
  padding: 0 2rem;
  margin-top: 0.25em;
  
  h2 {
    display: flex;
    align-items: center;
  }

  ${media.small`
    display: flex;
  `};
`;

export const CogIconWrapper = styled.div<CogIconWrapperProps>`
  position: relative;
  transition: 0.6s;
  transform: ${(props) => (props.isOpen ? 'rotate(150deg)' : undefined)};
  left: -0.25em;
  opacity: 0.5;
`;
