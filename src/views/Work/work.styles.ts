import styled, { css, keyframes } from "styled-components";
import theme from "styles/theme";
import { transparentize } from "polished";
import { media } from "styles/utils";
import { fadeIn } from "styles/animations";

const colors = ["#269", "#195905"];

const cycleColors = keyframes`
  ${colors.map(
    (c: string, i: number) => `
    ${i * (100 / colors.length)}% {
      background-color: ${c};
    }`
  )}
    100% {
      background-color: ${colors[0]};
    }
`;

interface LoadingContainerProps {
  $isLoading: boolean;
}

interface ProjectListContainerProps {
  $isLoading: boolean;
  $hasTarget: boolean;
  $listSize: number;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colorTextPrimary};
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  transition: 1s;

  background-image: linear-gradient(white 2px, transparent 2px),
    linear-gradient(90deg, white 2px, transparent 2px),
    linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;

  animation: ${css`
    ${cycleColors} 150s normal infinite
  `};
  
  ${media.small`
    height: 100%;
  `}
`;

export const LoadingContainer = styled.div<LoadingContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  background: ${transparentize(0.75, theme.colorBlack)};
  opacity: ${(props) => (props.$isLoading ? 1 : 0)};
  transition: 1s;
  height: 100%;
  min-height: 100%;
  max-height: ${(props) => (props.$isLoading ? "0px" : undefined)};
  width: 100%;
`;

export const SpinnerPlaceholder = styled.div`
  height: 0px;
`;

const generateAnimationDelay = (numItems: number) => {
  let styles = '';
  for (let i = 1; i <= numItems; i++) {
    styles += `
      &:nth-child(${i}) {
        animation-delay: ${i * 0.05}s;
      }
    `;
  }
  return css`${styles}`;
};

export const ProjectListContainer = styled.div<ProjectListContainerProps>`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  opacity: ${(props) => (props.$isLoading ? 0 : 1)};
    
  ${media.small`
    min-height: 100%;
  `}
    
  & > * {
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
    ${({ $listSize }) => generateAnimationDelay($listSize)}
  }
`;
