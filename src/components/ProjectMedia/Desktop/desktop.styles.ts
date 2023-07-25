import styled from 'styled-components';
import Stroke from '../Stroke';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const OuterFrame = styled(Stroke)`
  padding: 10px 10px 20px;
  margin-bottom: -1px;
`;

export const Screen = styled(Stroke)`
  max-height: 150px;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
`;

export const Stand = styled(Stroke)`
  width: 80px;
  min-height: 20px;
  margin-bottom: -1px;
`;

export const Base = styled(Stroke)`
  width: 200px;
  min-height: 5px;
`;
