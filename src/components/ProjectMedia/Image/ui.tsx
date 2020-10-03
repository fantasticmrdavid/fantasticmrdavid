import React, { memo, SyntheticEvent } from 'react';
import ReactGA from 'react-ga';
import {
  Container,
  Frame,
  Content,
} from './styles';

export interface Props {
  noSiblings: boolean,
  orientation: string,
  showPopup: (...args: any[]) => any,
  title: string,
  thumbnail: string,
  url?: string | undefined,
}

export default memo(
  (props: Props) => {
    const {
      noSiblings,
      thumbnail,
      title,
      url,
      orientation,
      showPopup,
    } = props;

    const handleClick = (e: SyntheticEvent) => {
      e.preventDefault();
      showPopup({ title, url, orientation });
      ReactGA.event({
        category: 'Project',
        action: 'Media Image Clicked',
        label: title,
      });
    };

    return (
      <Container noSiblings={noSiblings}>
        <Frame onClick={handleClick}>
          <Content src={thumbnail} alt={title} />
        </Frame>
      </Container>
    );
  },
);
