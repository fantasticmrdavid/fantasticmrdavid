import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

interface ContentProps {
  isCurrent: boolean,
}

export const Content = styled.div<ContentProps>`
  display: none;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.3;
  max-height: ${(props) => (props.isCurrent ? '1000px' : '0px')};
  padding: ${(props) => (props.isCurrent ? '1em 2em' : '0 2em')};
  color: ${(props) => (props.isCurrent ? theme.colorWhite : undefined)};
  background-color: ${(props) => (props.isCurrent ? theme.colorCharcoal : undefined)};
  overflow: hidden;
  transition:  0.6s;

  ${media.small`
    display: block;
  `};
`;
