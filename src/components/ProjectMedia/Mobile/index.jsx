import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class Mobile extends PureComponent {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { title } = this.props;
    ga('send', 'event', 'Media Mobile Website click', title);
  }

  render() {
    const { title, thumbnail, url } = this.props;

    return (
      <div>
        <div className={styles.outerFrame}>
          <div className={styles.screen}>
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={thumbnail} alt={title} onClick={this.boundHandleClick} /></a>
          </div>
          <div className={styles.homeButton} />
          <div className={styles.upButton} />
          <div className={styles.downButton} />
        </div>
      </div>
    );
  }
}

Mobile.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
