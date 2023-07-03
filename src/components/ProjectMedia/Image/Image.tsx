import React, { memo, SyntheticEvent, useContext } from "react";
import { PopupContext } from "contexts/Popup";
import { Container, Frame, Content } from "./image.styles";

export interface ImageProps {
  noSiblings: boolean;
  orientation: string;
  title: string;
  thumbnail: string;
  url?: string | undefined;
}

export const Image = memo((props: ImageProps) => {
  const { noSiblings, thumbnail, title, url, orientation } = props;
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
    <Container $noSiblings={noSiblings}>
      <Frame onClick={handleClick}>
        <Content src={thumbnail} alt={title} />
      </Frame>
    </Container>
  );
});
