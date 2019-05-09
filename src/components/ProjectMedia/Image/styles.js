import styled from 'styled-components';
import theme from 'styles/theme';
import Stroke from '../Stroke';

export const Container = styled.div`
  position: relative;
  align-self: ${props => (props.noSiblings ? 'auto' : 'center')};
`;

export const Frame = styled(Stroke)`
  padding: 10px 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Content = styled.img`
  border: 1px solid ${theme.colorBorder};
`;
