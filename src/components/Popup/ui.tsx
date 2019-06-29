import React, { memo, SyntheticEvent } from 'react';
import * as styles from './styles';

interface Props {
  active: boolean,
  close: (...args: any[]) => any,
  loading: boolean,
  orientation: string,
  title: string,
  url: string,
}

const {
  Container,
  Lightbox,
  Dialog,
  Close,
  Landscape,
  Portrait,
} = styles;

export default memo(
  (props: Props) => {
    const {
      active,
      close,
      loading,
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
      <Container loading={loading} active={active}>
        <Lightbox onClick={handleClose} />
        <Dialog>
          <Close onClick={handleClose}>X</Close>
          { !!url && <Image src={url} alt={title} /> }
        </Dialog>
      </Container>
    );
  },
);
