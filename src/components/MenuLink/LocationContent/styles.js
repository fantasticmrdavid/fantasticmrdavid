import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

export const Content = styled.div`
  display: none;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.3;
  max-height: ${props => (props.current ? '1000px' : '0px')};
  padding: ${props => (props.current ? '1em 2em' : '0 2em')};
  color: ${props => (props.current ? theme.colorWhite : undefined)};
  background-color: ${props => (props.current ? theme.colorCharcoal : undefined)};
  overflow: hidden;
  transition:  0.6s;

  ${media.small`
    display: block;
  `};
`;
