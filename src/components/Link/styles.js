import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

export const Link = styled.a`
  color: ${theme.colorWhite};
  text-decoration: none;
  border-bottom: ${`1px solid ${theme.colorWhite}`};
  transition: 0.3s;

  ${media.medium`
    &:hover {
      border-bottom-color: ${theme.colorRed};
    }
  `};
`;
