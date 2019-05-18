import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Popup = memo(
  (props) => {
    const {
      active,
      close,
      loading,
      orientation,
      title,
      url,
    } = props;

    const handleClose = (e) => {
      e.preventDefault();
      close(e);
    };

    const {
      Container,
      Lightbox,
      Dialog,
      Close,
      Landscape,
      Portrait,
    } = styles;

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

Popup.propTypes = {
  close: PropTypes.func.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  orientation: PropTypes.string,
  active: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Popup;
