import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';
import { Icon as ComponentIcon } from 'components/Icon/Icon';

interface ContainerProps {
  type: string,
  srcOn: string,
}

interface BackgroundProps {
  src: string,
}

interface GradientProps {
  type: string,
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center center;
  background-size: cover;
  opacity: 0.3;
  transition: 0.3s;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${theme.colorWhite};
  padding: 1em;
`;

export const Gradient = styled.div<GradientProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `linear-gradient(to ${props.type === 'next' ? 'right' : 'left'},
    rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)
  )`};
  opacity: 0;
`;

export const Icon = styled(ComponentIcon as any)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 5px;
  border-radius: 50%;
  border: ${`2px solid ${theme.colorWhite}`};
  width: 0.5em;
  height: 0.5em;
  font-size: 2rem;
  padding: 0.25em;
  opacity: 0.35;
  transition: opacity 0.3s;
`;

export const Title = styled.div`
  display: none;
  white-space: nowrap;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  height: 65px;
  align-items: center;
  justify-content: ${(props) => (props.type === 'back' ? 'flex-start' : 'flex-end')};
  flex: 1;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid ${theme.colorDarkCharcoal};

  ${media.hover`
    &:hover {
      flex: 2;
      font-size: 1.2rem;

      ${Background} {
        opacity: 1;
        background-image: ${(props: ContainerProps) => `url(${props.srcOn})`};
      }

      ${Gradient} {
        opacity: 0.7;
      }

      ${Icon} {
        opacity: 1;
      }

      ${Title} {
        display: block;
      }
    }
  `}
`;
