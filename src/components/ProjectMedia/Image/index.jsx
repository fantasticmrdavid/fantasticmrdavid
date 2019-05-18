import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Image = (props) => {
  const {
    noSiblings,
    thumbnail,
    title,
    url,
    orientation,
    showPopup,
  } = props;

  const handleClick = (e) => {
    e.preventDefault();
    showPopup({ title, url, orientation });
    ga('send', 'event', 'Media Image Click', title);
  };

  const {
    Container,
    Frame,
    Content,
  } = styles;

  return (
    <Container noSiblings={noSiblings}>
      <Frame onClick={handleClick}>
        <Content src={thumbnail} alt={title} />
      </Frame>
    </Container>
  );
};

Image.propTypes = {
  noSiblings: PropTypes.bool,
  orientation: PropTypes.string.isRequired,
  showPopup: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Image;
