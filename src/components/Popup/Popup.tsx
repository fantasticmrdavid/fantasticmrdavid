import React, { memo, SyntheticEvent, useState } from "react";
import {
  Container,
  Lightbox,
  Dialog,
  Close,
  Landscape,
  Portrait,
} from "./popup.styles";
import { ImagePreloader } from "components/ImagePreloader/ImagePreloader";

export type PopupProps = {
  isActive: boolean;
  onClose: (...args: any[]) => any;
  orientation: string;
  title: string;
  url: string;
};

export const Popup = memo((props: PopupProps) => {
  const { onClose, isActive, orientation, title, url } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = (e: SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  const Image = orientation === "landscape" ? Landscape : Portrait;

  return (
    <Container $isLoading={isLoading} $isActive={isActive}>
      <ImagePreloader
        hideCompletedCount
        images={[url]}
        completedAction={() => setIsLoading(false)}
      />
      <Lightbox data-testid={"popupLightbox"} onClick={handleClose} />
      <Dialog>
        <Close data-testid={"popupClose"} onClick={handleClose}>
          X
        </Close>
        {!!url && (
          <Image
            data-testid={"popupImage"}
            data-orientation={orientation}
            src={url}
            alt={title}
          />
        )}
      </Dialog>
    </Container>
  );
});
