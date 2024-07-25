import styled from "styled-components";
import { transparentize } from "polished";
import theme from "styles/theme";
import { media } from "styles/utils";
import { fadeIn } from "styles/animations";

interface ContainerProps {
  $isLoading: boolean;
  $isActive: boolean;
}

export const Container = styled.section<ContainerProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.$isLoading || !props.$isActive ? -1 : 26)};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  opacity: ${(props) => (props.$isLoading || !props.$isActive ? 0 : 1)};
`;

export const Lightbox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: ${transparentize(0.3, theme.colorBlack)};
`;

export const Dialog = styled.div`
  position: relative;
  border: ${`1px solid ${theme.colorCharcoal}`};
  box-shadow: ${theme.dropShadow};
  max-width: 90%;
  max-height: 90%;
  transition: 0.5s;
`;

export const Landscape = styled.img`
  width: auto;
  max-width: 90vw;
  height: auto;
  max-height: 90vh;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;

  ${media.xlarge`
    max-width: 1600px;
  `}
`;

export const Portrait = styled.img`
  height: auto;
  width: auto;
  max-height: 90vh;
  max-width: 90vw;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;

  ${media.small`
    max-width: auto;
  `}
`;

export const Close = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0.5em;
  color: white;
  background-color: ${transparentize(0.8, theme.colorBlack)};
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;

  ${media.small`
    right: -1em;
    padding: 0;
  `};

  ${media.hover`
    &:hover {
      color: tomato;
    }
  `};
`;
