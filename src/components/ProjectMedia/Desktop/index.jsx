import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

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
    const {
      Container,
      OuterFrame,
      Screen,
      Image,
      Stand,
      Base,
    } = styles;

    return (
      <Container>
        <OuterFrame>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Screen>
              <Image src={thumbnail} alt={title} onClick={this.boundHandleClick} />
            </Screen>
          </a>
        </OuterFrame>
        <Stand />
        <Base />
      </Container>
    );
  }
}

Desktop.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
