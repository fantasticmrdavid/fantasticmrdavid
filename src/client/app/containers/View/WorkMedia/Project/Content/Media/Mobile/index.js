import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

export default class Mobile extends Component {
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
        <div className={`${styles.outerFrame} ${styles.stroke}`}>
          <div className={`${styles.screen} ${styles.stroke}`}>
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={thumbnail} alt={title} onClick={this.boundHandleClick} /></a>
          </div>
          <div className={`${styles.homeButton} ${styles.stroke}`} />
          <div className={`${styles.upButton} ${styles.stroke}`} />
          <div className={`${styles.downButton} ${styles.stroke}`} />
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
