import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class Desktop extends PureComponent {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { title } = this.props;
    ga('send', 'event', 'Media Desktop Website click', title);
  }

  render() {
    const { title, thumbnail, url } = this.props;

    return (
      <div className={styles.Desktop}>
        <div className={styles.outerFrame}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={styles.screen}>
              <img src={thumbnail} alt={title} onClick={this.boundHandleClick} />
            </div>
          </a>
        </div>
        <div className={styles.stand} />
        <div className={styles.base} />
      </div>
    );
  }
}

Desktop.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
