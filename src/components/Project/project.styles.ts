<<<<<<< Updated upstream
import styled from "styled-components";
import theme from "styles/theme";
import { media } from "styles/utils";
=======
import styled, { css } from "styled-components";
import theme from 'styles/theme';
import { media } from 'styles/utils';
>>>>>>> Stashed changes

interface ContainerProps {
  $isOtherCurrent: boolean;
  $isCurrent: boolean;
}

interface TileProps {
  $isOtherCurrent: boolean;
  $isCurrent: boolean;
  $isParentLoading: boolean;
  $target: string;
}

interface ImageProps {
<<<<<<< Updated upstream
  $isCurrent: boolean;
  $srcOn: string;
  $srcOff: string;
  $target: string;
=======
  isCurrent: boolean,
  src: string,
  target: string,
>>>>>>> Stashed changes
}

interface TileContentProps {
  $isCurrent: boolean;
}

interface CloseProps {
  $isCurrent: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  perspective: 1200px;
  overflow: ${(props) => (props.$isOtherCurrent ? "hidden" : undefined)};
  width: 100%;
  height: ${(props) => (props.$isCurrent ? "100%" : undefined)};
  max-height: ${(props) => {
    const { $isCurrent, $isOtherCurrent } = props;
    if ($isOtherCurrent) return "0px";
    if ($isCurrent) return "none";
    return "20%";
  }};
`;

export const Tile = styled.a<TileProps>`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.$isCurrent ? "4rem" : "100%")};
  top: 0px;
  right: ${(props) => (props.$isCurrent ? "0px" : "-20px")};
  background-color: ${theme.colorCharcoal};
  background-position-y: ${(props) => {
    const { $isCurrent, $target } = props;
    if ($isCurrent) {
      if ($target === "sitepoint") return "top";
      if ($target === "ga" || $target === "tramsformation") return "30%";
    }
    return undefined;
  }};
  border: ${`2px solid ${theme.colorBlack}`};
  box-shadow: ${theme.dropShadow};
  transition: 0.5s;
  transform: ${(props: TileProps) => {
    const { $isCurrent, $isParentLoading } = props;
    if ($isCurrent && !$isParentLoading) return "rotateY(0deg)";
    if (!$isParentLoading) return "rotateY(20deg)";
    return "rotateY(180deg)";
  }};
  opacity: ${(props) => (props.$isOtherCurrent ? 0 : 1)};
  z-index: ${(props) => (props.$isCurrent ? 12 : undefined)};

  ${Container}:nth-child(even) & {
    right: ${(props: TileProps) => (props.$isCurrent ? undefined : "20px")};
    transform: ${(props: TileProps) =>
      props.$isCurrent ? undefined : "rotateY(-20deg)"};
  }

  ${media.hover`
    ${Container}:hover & {
      right: 0px;
      z-index: 12;
      transform: ${(props: TileProps) =>
        props.$isCurrent ? undefined : "rotateY(0deg)"};
    }
    
    ${Container}:nth-child(even):hover & {
      right: ${(props: TileProps) => (props.$isCurrent ? undefined : "0px")};
  }
  `}
`;

export const Image = styled.div<ImageProps>`
  position: absolute;
<<<<<<< Updated upstream
  background-image: ${(props) =>
    props.$isCurrent ? `url(${props.$srcOn})` : `url(${props.$srcOff})`};
=======
  background-image: ${(props) => `url(${props.src})`};
>>>>>>> Stashed changes
  background-size: cover;
  background-position: center center;
  background-position-x: ${(props) =>
    props.$isCurrent && props.$target === "tramsformation"
      ? "left"
      : undefined};
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  filter: ${(props) => css`grayscale(${props.isCurrent ? 0 : 1})`};

<<<<<<< Updated upstream
  ${Container}:hover &[target=${(props) => props.$target}] {
    background-position-x: ${(props) =>
      props.$target === "tramsformation" ? "left" : undefined};
    background-image: ${(props) => `url(${props.$srcOn})`};
=======
  ${Container}:hover &[target=${(props) => props.target}] {
    background-position-x: ${(props) => (props.target === 'tramsformation' ? 'left' : undefined)};
    filter: grayscale(0);
>>>>>>> Stashed changes
  }
`;

export const TileContent = styled.div<TileContentProps>`
  position: absolute;
  width: ${(props) => (props.$isCurrent ? "100%" : undefined)};
  bottom: ${(props) => (props.$isCurrent ? "-3.85rem" : "0px")};
  right: 0px;
  left: ${(props) => (props.$isCurrent ? "-0.25em" : undefined)};
  color: ${(props) =>
    props.$isCurrent ? theme.colorWhite : theme.colorTextPrimary};
  font-weight: 300;
  text-transform: uppercase;
  padding: 1em 2em;
  background-color: ${theme.colorDarkCharcoal};
  border-bottom: ${(props) =>
    props.$isCurrent ? `1px solid ${theme.colorCharcoal}` : undefined};
  opacity: ${(props) => (props.$isCurrent ? 1 : 0.9)};
  transition: 0.3s;
  cursor: ${(props) => (props.$isCurrent ? "default" : undefined)};

  ${Container}:nth-child(even) & {
    right: auto;
    left: ${(props) => (!props.$isCurrent ? "0px" : undefined)};
  }
`;

export const Title = styled.div`
  font-size: 1.25rem;
`;

export const Tagline = styled.div`
  padding: 0.25em 0;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

export const Close = styled.div<CloseProps>`
  position: absolute;
  bottom: -35px;
  right: 1em;
  color: ${theme.colorWhite};
  font-size: 1.4rem;
  opacity: ${(props) => (props.$isCurrent ? 1 : 0)};
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;

  ${media.hover`
    &:hover {
      color: ${theme.colorRed};
    }
  `}
`;
