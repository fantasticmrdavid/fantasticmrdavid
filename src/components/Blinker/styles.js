import styled, { css } from 'styled-components';
import { blink } from 'styles/animations';
import theme from 'styles/theme';

export const Cursor = styled.div`
  position: relative;
  display: inline-block;
  width: 0.5rem;
  background-color: ${theme.colorFont};
  margin-left: 0.15rem;
  animation: ${css`${blink} 1s step-end infinite`};
  border-bottom: 2px solid ${theme.colorFont};
`;
