import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

interface ContainerProps {
  otherCurrent: boolean,
  current: boolean,
}

interface TileProps {
  otherCurrent: boolean,
  current: boolean,
  parentLoading: boolean,
}

interface ImageProps {
  current: boolean,
  srcOn: string,
  srcOff: string,
  target: string,
}

interface TileContentProps {
  current: boolean,
}

interface CloseProps {
  current: boolean,
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  perspective: 1200px;
  overflow: ${(props) => (props.otherCurrent ? 'hidden' : undefined)};
  width: 100%;
  height: ${(props) => (props.current ? '100%' : undefined)};
  max-height: ${(props) => {
    const { current, otherCurrent } = props;
    if (otherCurrent) return '0px';
    if (current) return 'none';
    return '20%';
  }}
`;

export const Tile = styled.a<TileProps>`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => (props.current ? '4rem' : '100%')};
  top: 0px;
  right: ${(props) => (props.current ? '0px' : '-20px')};
  background-color: ${theme.colorCharcoal};
  background-position-y: ${(props) => {
    const { current, target } = props;
    if (current) {
      if (target === 'sitepoint') return 'top';
      if (target === 'ga' || target === 'tramsformation') return '30%';
    }
    return undefined;
  }};
  border: ${`2px solid ${theme.colorBlack}`};
  box-shadow: ${theme.dropShadow};
  transition: 0.5s;
  transform: ${(props) => {
    const { current, parentLoading } = props;
    if (current && !parentLoading) return 'rotateY(0deg)';
    if (!parentLoading) return 'rotateY(20deg)';
    return 'rotateY(180deg)';
  }};
  opacity: ${(props) => (props.otherCurrent ? 0 : 1)};
  z-index: ${(props) => (props.current ? 12 : undefined)};

  ${Container}:nth-child(even) & {
    right: ${(props) => (!props.current ? '20px' : undefined)};
    transform: ${(props) => (!props.current && !props.parentLoading ? 'rotateY(-20deg)' : undefined)};
  }

  ${media.hover`
    ${Container}:hover & {
      right: 0px;
      z-index: 12;
      transform: ${(props: TileProps) => (!props.parentLoading ? 'rotateY(0deg)' : undefined)};
    }
  `}
`;

export const Image = styled.div<ImageProps>`
  position: absolute;
  background-image: ${(props) => (props.current ? `url(${props.srcOn})` : `url(${props.srcOff})`)};
  background-size: cover;
  background-position: center center;
  background-position-x: ${(props) => (props.current && props.target === 'tramsformation' ? 'left' : undefined)};
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;

  ${Container}:hover & {
    background-position-x: ${(props) => (props.target === 'tramsformation' ? 'left' : undefined)};
    background-image: ${(props) => `url(${props.srcOn})`};
  }
`;

export const TileContent = styled.div<TileContentProps>`
  position: absolute;
  width: ${(props) => (props.current ? '100%' : undefined)};
  bottom: ${(props) => (props.current ? '-3.85rem' : '0px')};
  right: 0px;
  left: ${(props) => (props.current ? '-0.25em' : undefined)};
  color: ${(props) => (props.current ? theme.colorWhite : theme.colorTextPrimary)};
  font-weight: 300;
  text-transform: uppercase;
  padding: 1em 2em;
  background-color: ${theme.colorDarkCharcoal};
  border-bottom: ${(props) => (props.current ? `1px solid ${theme.colorCharcoal}` : undefined)};
  opacity: ${(props) => (props.current ? 1 : 0.9)};
  transition: 0.3s;
  cursor: ${(props) => (props.current ? 'default' : undefined)};

  ${Container}:nth-child(even) & {
    right: auto;
    left: ${(props) => (!props.current ? '0px' : undefined)};
  }
`;

export const Title = styled.div`
  font-size: 1.25rem;
`;

export const Tagline = styled.div`
  padding: 0.25em 0;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

export const Close = styled.div<CloseProps>`
  position: absolute;
  bottom: -35px;
  right: 1em;
  color: ${theme.colorWhite};
  font-size: 1.4rem;
  opacity: ${(props) => (props.current ? 1 : 0)};
  cursor: pointer;
  transition: 0.3s;
  z-index: 2;

  ${media.hover`
    &:hover {
      color: ${theme.colorRed};
    }
  `}
`;
