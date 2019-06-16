import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';
import ComponentLink from 'components/Link';

interface ContainerProps {
  current: boolean,
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.3;
  margin-top: 5em;
  max-height: ${props => (props.current ? '2500px' : '0px')};
  padding: 5em 2.5em;
  transition: 1s;
  background: ${theme.colorDarkCharcoal};
  opacity: ${props => (props.current ? 1 : 0)};
  overflow: ${props => (props.current ? 'auto' : undefined)};
`;

export const Section = styled.section`
  margin-bottom: 1.5em;
`;

export const Label = styled.div`
  color: white;
`;

export const Copy = styled.div`
  a {
    color: ${theme.colorWhite};
    text-decoration: none;
    border-bottom: ${`1px solid ${theme.colorWhite}`};
    transition: 0.3s;

    ${media.medium`
      &:hover {
        border-bottom-color: ${theme.colorRed};
      }
    `}
  }
`;

export const Link = styled(ComponentLink)`
`;

export const LinkWrapper = styled.div`
  text-align: right;
`;

export const MediaWrapper = styled.div`
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
