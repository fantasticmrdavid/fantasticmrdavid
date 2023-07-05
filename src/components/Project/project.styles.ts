import styled, { css } from "styled-components";
import theme from 'styles/theme';
import { media } from 'styles/utils';

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
  $isCurrent: boolean,
  $src: string,
  $target: string
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
  overflow: ${(props) => (props.$isOtherCurrent ? "hidden" : undefined)};
  width: 100%;
  max-height: ${(props) => {
    const { $isCurrent, $isOtherCurrent } = props;
    if ($isOtherCurrent) return "0px";
    if ($isCurrent) return "100%";
    return "20%";
  }};
  z-index: ${(props) => {
    if (props.$isOtherCurrent) return 0;
    if (props.$isCurrent) return 12;
    return 0;
  }};
  
  ${(props: ContainerProps) => {
    if (props.$isCurrent) return css`height: 100%;`
    if (!props.$isCurrent) return css`
      ${media.small`
      position: absolute;
      max-height: 100%;
      
      &:nth-child(1){
        height: 20%;
        width: 55%;
      }
      
      &:nth-child(2){
        top: 5%;
        left: 55%;
        height: 30%;
        width: 25%;
      }
      
      &:nth-child(3){
        right: 0;
        height: 35%;
        width: 20%;
      }
      
      &:nth-child(4){
        left: 5%;
        top: 20%;
        height: 15%;
        width: 50%;
      }
      
      &:nth-child(5){
        top: 35%;
        height: 40%;
        width: 25%;
      }
      
      &:nth-child(6){
        right: 0;
        top: 40%;
        height: 40%;
        width: 25%;
      }
      
      &:nth-child(7){
        right: 25%;
        top: 35%;
        height: 20%;
        width: 50%;
      }
      
      &:nth-child(8){
        left: 25%;
        bottom: 20%;
        height: 25%;
        width: 45%;
      }
      
      &:nth-child(9){
        left: 0;
        bottom: 0%;
        height: 20%;
        width: 35%;
      }
      
      &:nth-child(10){
        right: 0;
        bottom: 0;
        height: 20%;
        width: 65%;
      }
    `}`
  }}

  
`;

export const Tile = styled.a<TileProps>`
  display: ${(props) => props.$isOtherCurrent ? "none" : "block"};
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.$isCurrent ? "4rem" : "100%")};
  top: 0px;
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
    if ($isCurrent || !$isParentLoading) return "rotateY(0deg)";
    return "rotateY(180deg)";
  }};
  opacity: ${(props) => (props.$isOtherCurrent ? 0 : 1)};
  z-index: ${(props) => (props.$isOtherCurrent ? 0 : 12)};
`;

export const Image = styled.div<ImageProps>`
  position: absolute;
  background-image: ${(props) => `url(${props.$src})`};
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
  filter: ${(props) => css`grayscale(${props.$isCurrent ? 0 : 1})`};

  ${Container}:hover & {
    filter: grayscale(0);
  }
`;

export const TileContent = styled.div<TileContentProps>`
  position: absolute;
  width: ${(props) => (props.$isCurrent ? "100%" : undefined)};
  bottom: ${(props) => (props.$isCurrent ? "-3.85rem" : "0px")};
  left: -2px;
  right: auto;
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
  cursor: ${(props) => (props.$isCurrent ? "default" : "pointer")};

  ${Container}:nth-child(even) & {
    left: ${(props) => (!props.$isCurrent ? "auto" : "-2px")};
    right: ${(props) => (!props.$isCurrent ? "0px" : undefined)};
  }
`;

export const Title = styled.div`
  font-size: 1.25rem;
`;

export const Tagline = styled.div`
  margin-top: 0.25em;
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
