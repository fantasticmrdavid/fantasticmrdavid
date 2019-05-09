import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

class Popup extends PureComponent {
  constructor() {
    super();
    this.boundHandleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    e.preventDefault();

    const { close } = this.props;
    close(e);
  }
  render() {
    const { title, url, orientation, active, loading } = this.props;
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
        <Lightbox onClick={this.boundHandleClose} />
        <Dialog>
          <Close onClick={this.boundHandleClose}>X</Close>
          { !!url && <Image src={url} alt={title} /> }
        </Dialog>
      </Container>
    );
  }
}

Popup.propTypes = {
  close: PropTypes.func.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  orientation: PropTypes.string,
  active: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Popup;
