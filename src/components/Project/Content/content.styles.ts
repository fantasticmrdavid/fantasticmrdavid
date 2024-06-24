import styled from "styled-components";
import theme from "styles/theme";
import { media } from "styles/utils";
import { Link as ComponentLink } from "components/Link/Link";

interface ContainerProps {
  $isCurrent: boolean;
}

export const ActionsContainer = styled.div`
  display: flex;
  width: calc(100% + 5em);
  margin: 1em -2.5em 0;
  min-height: 60px;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.3;
  margin-top: 5em;
  max-height: ${(props) => (props.$isCurrent ? "2500px" : "0px")};
  padding: 5em 2.5em 0;
  background: ${theme.colorDarkCharcoal};
  opacity: ${(props) => (props.$isCurrent ? 1 : 0)};
  overflow: ${(props) => (props.$isCurrent ? "auto" : undefined)};
  width: 100%;
`;

export const Section = styled.section`
  margin-bottom: 1.5em;
`;

export const Label = styled.div`
  color: white;
`;

export const Copy = styled.div`
  a {
    color: ${theme.colorWhite};
    text-decoration: none;
    border-bottom: ${`1px solid ${theme.colorWhite}`};
    transition: 0.3s;

    ${media.hover`
      &:hover {
        border-bottom-color: ${theme.colorRed};
      }
    `}
  }
`;

export const Link = styled(ComponentLink as any)``;

export const LinkWrapper = styled.div`
  text-align: right;
`;

export const MediaWrapper = styled.div`
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  flex: none;
  justify-content: center;
  gap: 2em;
`;

export const Spacer = styled.div`
  flex: 1;
`;
