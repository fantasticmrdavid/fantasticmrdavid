import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

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

    return (
      <div className={`${styles.Popup} ${!!loading && styles.loading} ${!!active && styles.active}`}>
        <div className={styles.Lightbox} onClick={this.boundHandleClose} />
        <div className={styles.dialog}>
          <div className={styles.close} onClick={this.boundHandleClose}>X</div>
          { !!url && <img className={styles[orientation]} src={url} alt={title} /> }
        </div>
      </div>
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
