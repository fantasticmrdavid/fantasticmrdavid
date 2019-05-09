import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

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
    const {
      OuterFrame,
      Screen,
      HomeButton,
      UpButton,
      DownButton,
      Image,
    } = styles;

    return (
      <OuterFrame>
        <Screen>
          <a href={url} target="_blank" rel="noopener noreferrer"><Image src={thumbnail} alt={title} onClick={this.boundHandleClick} /></a>
        </Screen>
        <HomeButton />
        <UpButton />
        <DownButton />
      </OuterFrame>
    );
  }
}

Mobile.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
