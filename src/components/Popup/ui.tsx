import React, { memo, SyntheticEvent, useContext } from 'react';
import { LoadingContext } from 'contexts/Loading';
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
      orientation,
      title,
      url,
    } = props;
    const { getIsLoading } = useContext(LoadingContext);

    const handleClose = (e: SyntheticEvent) => {
      e.preventDefault();
      close(e);
    };

    const Image = orientation === 'landscape' ? Landscape : Portrait;

    return (
      <Container isLoading={getIsLoading()} isActive={isActive}>
        <Lightbox onClick={handleClose} />
        <Dialog>
          <Close onClick={handleClose}>X</Close>
          { !!url && <Image src={url} alt={title} /> }
        </Dialog>
      </Container>
    );
  },
);
