import styled from "styled-components";
import theme from "styles/theme";
import Stroke from "../Stroke";

interface ContainerProps {
  $noSiblings: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  max-width: 100%;
  align-self: ${(props) => (props.$noSiblings ? "auto" : "center")};
`;

export const Frame = styled(Stroke)`
  padding: 10px 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Content = styled.img`
  border: 1px solid ${theme.colorBorder};
  width: 100%;
`;
