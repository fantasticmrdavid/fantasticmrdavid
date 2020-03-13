import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { transparentize } from 'polished';
import { fadeIn } from 'styles/animations';
import { media } from 'styles/utils';
import ComponentLink from 'components/Link';

interface ContainerProps {
  isLoading: boolean,
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 100%;
  padding: 2em;
  background-color: ${theme.colorDarkCharcoal};
  color: ${theme.colorTextPrimary};
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: 1s;
  animation: ${css`${fadeIn} 1s ease 1`};
  animation-fill-mode: forwards;

  ${media.small`
    padding: 4em 2em;
    flex-direction: row-reverse;
    align-items: flex-start;
  `}
`;

export const Bg = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProfilePhoto = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1em;
  z-index: 1;

  ${media.small`
    margin-bottom: 0;
  `};
`;

export const Content = styled.div`
  flex: 1;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.3;
  max-width: 100%;
  padding-right: 0px;
  z-index: 1;

  ${media.small`
    padding-right: 1em;
    max-width: 900px;
  `}

  h2{
    color: ${theme.colorWhite};
  }

  p {
    margin-bottom: 1em;
  }

  ul {
    list-style: disc;
    margin-top: 0.25em;
    padding-left: 1.2em;
  }
`;

export const SiteSpecs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.large`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;

export const SpecsSection = styled.div`
  padding: 1em 0;

  h3 {
    color: ${theme.colorWhite};
  }
`;

export const SleeperLink = styled(ComponentLink)`
  color: ${theme.colorTextPrimary};
  border-bottom: ${`1px solid ${transparentize(0.8, theme.colorTextPrimary)}`};

  ${media.hover`
    &:hover {
      color: ${theme.colorWhite};
    }
  `};
`;
