import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

export default class Image extends PureComponent {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const {
      title,
      url,
      orientation,
      showPopup,
    } = this.props;
    showPopup({ title, url, orientation });

    ga('send', 'event', 'Media Image Click', title);
  }

  render() {
    const { noSiblings, title, thumbnail } = this.props;
    const {
      Container,
      Frame,
      Content,
    } = styles;

    return (
      <Container noSiblings={noSiblings}>
        <Frame onClick={this.boundHandleClick}>
          <Content src={thumbnail} alt={title} />
        </Frame>
      </Container>
    );
  }
}

Image.propTypes = {
  noSiblings: PropTypes.bool,
  orientation: PropTypes.string.isRequired,
  showPopup: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
