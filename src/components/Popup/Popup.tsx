import React, { memo, SyntheticEvent, useContext } from 'react';
import { LoadingContext } from 'contexts/Loading';
import {
  Container,
  Lightbox,
  Dialog,
  Close,
  Landscape,
  Portrait,
} from './popup.styles';

export type PopupProps = {
  isActive: boolean,
  onClose: (...args: any[]) => any,
  orientation: string,
  title: string,
  url: string,
};

export const Popup = memo(
  (props: PopupProps) => {
    const {
      onClose,
      isActive,
      orientation,
      title,
      url,
    } = props;
    const { getIsLoading } = useContext(LoadingContext);

    const handleClose = (e: SyntheticEvent) => {
      e.preventDefault();
      onClose();
    };

    const Image = orientation === 'landscape' ? Landscape : Portrait;

    return (
      <Container isLoading={getIsLoading()} isActive={isActive}>
        <Lightbox data-testid={"popupLightbox"} onClick={handleClose} />
        <Dialog>
          <Close data-testid={"popupClose"} onClick={handleClose}>X</Close>
          { !!url && <Image data-testid={"popupImage"} data-orientation={orientation} src={url} alt={title} /> }
        </Dialog>
      </Container>
    );
  },
);
