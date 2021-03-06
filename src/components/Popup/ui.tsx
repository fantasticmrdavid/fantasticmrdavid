import React, { memo, SyntheticEvent } from 'react';
import {
  Container,
  Lightbox,
  Dialog,
  Close,
  Landscape,
  Portrait,
} from './styles';
import { ContainerProps, StateProps, DispatchProps } from './types';

export type UiProps = ContainerProps & StateProps & DispatchProps;

export default memo(
  (props: UiProps) => {
    const {
      close,
      isActive,
      isLoading,
      orientation,
      title,
      url,
    } = props;

    const handleClose = (e: SyntheticEvent) => {
      e.preventDefault();
      close(e);
    };

    const Image = orientation === 'landscape' ? Landscape : Portrait;

    return (
      <Container isLoading={isLoading} isActive={isActive}>
        <Lightbox onClick={handleClose} />
        <Dialog>
          <Close onClick={handleClose}>X</Close>
          { !!url && <Image src={url} alt={title} /> }
        </Dialog>
      </Container>
    );
  },
);
