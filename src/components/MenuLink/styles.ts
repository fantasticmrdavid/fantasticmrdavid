import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

const colorAbout = '#3fa44e';
const colorWork = '#967fd1';
const colorContact = '#cc750c';

interface LabelProps {
  isCurrent: boolean,
  isMenuActive: boolean,
  target: string,
}

export const Container = styled.div`
  display: block;
  position: relative;
  color: inherit;

  &.current {
    transition: 0s;
  }
`;

export const Label = styled.div<LabelProps>`
  position: relative;
  padding: ${(props) => (props.isMenuActive ? '0.75rem 2rem' : '0.75rem 0')};
  transition: 0.5s;
  color: ${(props) => (props.isCurrent ? theme.colorBlack : undefined)};
  font-size: ${(props) => (props.isCurrent ? '2rem' : undefined)};
  font-weight: ${(props) => (props.isCurrent ? 600 : undefined)};
  cursor: pointer;
  background-color: ${(props) => {
    const { isCurrent, target } = props;
    if (isCurrent) {
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

  ${media.hover`
    &:hover {
      padding-left: ${(props: { isCurrent: boolean }) => (!props.isCurrent ? '60px' : undefined)};
      background-color: ${(props: { isCurrent: boolean }) => (!props.isCurrent ? theme.colorDarkGrey : undefined)};

      &:before {
        width: ${(props: { isCurrent: boolean }) => (props.isCurrent ? '0px' : '15px')};
        background-color: ${/* eslint-disable */
          (props: { isCurrent: boolean, target: string }) => {
          const { isCurrent, target } = props;
          if (!isCurrent) {
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
