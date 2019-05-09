import styled from 'styled-components';
import theme from 'styles/theme';
import { transparentize } from 'polished';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colorTextPrimary};
  height: 100%;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  transition: 1s;

  background-color: #269;
  background-image: linear-gradient(white 2px, transparent 2px),
  linear-gradient(90deg, white 2px, transparent 2px),
  linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  background: ${transparentize(0.75, theme.colorBlack)};
  opacity: ${props => (props.loading ? 1 : 0)};
  transition: 1s;
  height: 100%;
  min-height: 100%;
  max-height: ${props => (props.loading ? '0px' : undefined)};
  width: 100%;
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 100%;
  transition: 1s;
  opacity: ${props => (props.loading ? 0 : 1)};
`;