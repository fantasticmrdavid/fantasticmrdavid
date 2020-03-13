import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';
import IconComponent, { Props as IconComponentProps } from 'components/Icon';

interface ContainerProps {
  isActive: boolean,
}

interface CtaProps {
  isActive: boolean,
}

interface NavProps {
  isActive: boolean,
}

interface SubtitleProps {
  isActive: boolean,
}

interface IconProps {
  isActive?: boolean,
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
  padding-bottom: ${(props) => (props.isActive ? '0px' : undefined)};

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
  display: ${(props) => (props.isActive ? 'none' : 'flex')};
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
  z-index: ${(props) => (props.isActive ? -1 : 1)};
  opacity: ${(props) => (props.isActive ? 'undefined' : 1)};
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
  margin: ${(props) => (props.isActive ? '0.5rem 0' : undefined)};
  max-height: ${(props) => (props.isActive ? '1000px' : '0px')};
  transition: 0.5s;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  overflow: hidden;
  background-color: #444;
  border-top: ${(props) => (props.isActive ? '1px solid #333' : undefined)};
  border-bottom: ${(props) => (props.isActive ? '1px solid #333' : undefined)};
`;

export const Subtitle = styled.div<SubtitleProps>`
  display: ${(props) => (props.isActive ? 'none' : 'flex')};
  position: relative;
  font-size: 1rem;
  width: 100%;
  padding: 0 2rem;
  margin-top: 0.25em;

  ${media.small`
    display: flex;
  `};
`;

export const Icon = styled(({ isActive, ...rest }: IconProps & IconComponentProps) => <IconComponent {...rest} />)`
  position: relative;
  transition: 0.6s;
  transform: ${(props) => (props.isActive ? 'rotate(150deg)' : undefined)};
`;

export const CogIcon = styled(Icon)`
  left: -0.25em;
  opacity: 0.5;
`;
