import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { confirmReset } from 'styles/animations';

interface ContainerProps {
  $isCompleted: boolean,
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colorWhite};
  text-align: center;
  animation: ${(props) => (props.$isCompleted ? css`${confirmReset} 1s normal linear` : undefined)};
  animation-fill-mode: forwards;
`;
