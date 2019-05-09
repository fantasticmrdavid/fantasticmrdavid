import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

const colorAbout = '#3fa44e';
const colorWork = '#967fd1';
const colorContact = '#cc750c';

export const Container = styled.div`
  display: block;
  position: relative;
  color: inherit;

  &.current {
    transition: 0s;
  }
`;

export const Label = styled.div`
  position: relative;
  padding: ${props => (props.menuActive ? '0.75rem 2rem' : '0.75rem 0')};
  transition: 0.5s;
  color: ${props => (props.current ? theme.colorBlack : undefined)};
  font-size: ${props => (props.current ? '2rem' : undefined)};
  font-weight: ${props => (props.current ? 600 : undefined)};
  cursor: pointer;
  background-color: ${(props) => {
    const { current, target } = props;
    if (current) {
      if (target === 'about') return colorAbout;
      if (target === 'work') return colorWork;
      if (target === 'contact') return colorContact;
      return theme.colorLightGrey;
    }
    return undefined;
  }};

  &:before {
    position: absolute;
    top: 0px;
    left: 0px;
    content: "";
    height: 100%;
    transition: 0.3s;
    background-color: ${theme.colorDarkGrey};
  }

  ${media.medium`
    &:hover {
      padding-left: ${props => (!props.current ? '60px' : undefined)};
      background-color: ${props => (!props.current ? theme.colorDarkGrey : undefined)};

      &:before {
        width: ${props => (props.current ? '0px' : '15px')};
        background-color: ${/* eslint-disable */
          (props) => {
          const { current, target } = props;
          if (!current) {
            if (target === 'about') return colorAbout;
            if (target === 'work') return colorWork;
            if (target === 'contact') return colorContact;
            return undefined;
          }
          return theme.colorDarkCharcoal;
        }/* eslint-enable */};
      }
    }
  `};
`;
