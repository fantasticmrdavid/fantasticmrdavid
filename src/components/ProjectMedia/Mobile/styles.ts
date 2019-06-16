import styled from 'styled-components';
import Stroke from '../Stroke';

export const OuterFrame = styled(Stroke)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px 7px 30px;
  max-height: 160px;
`;

export const Screen = styled(Stroke)`
  max-height: 160px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
`;

export const HomeButton = styled(Stroke)`
  position: absolute;
  align-self: center;
  bottom: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  left: calc(50% - 10px);
`;

export const UpButton = styled(Stroke)`
  position: absolute;
  top: 30px;
  right: -3px;
  width: 1px;
  height: 20px;
`;

export const DownButton = styled(Stroke)`
  position: absolute;
  top: 60px;
  right: -3px;
  width: 1px;
  height: 20px;
`;
