import React, { memo, SyntheticEvent, useContext } from 'react';
import { PopupContext } from 'contexts/Popup';
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
    } = props;
    const { popup, setPopup } = useContext(PopupContext);

    const handleClick = (e: SyntheticEvent) => {
      e.preventDefault();
      if (url) {
        setPopup({
          title,
          orientation,
          url,
          isActive: true,
          onClose: () => {
            setPopup({
              ...popup,
              isActive: false,
            });
          },
        });
      }
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
