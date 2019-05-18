import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Desktop = ({ title, thumbnail, url }) => {
  const handleClick = useCallback(() => ga('send', 'event', 'Media Desktop Website click', title), [title]);
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
            <Image src={thumbnail} alt={title} onClick={handleClick} />
          </Screen>
        </a>
      </OuterFrame>
      <Stand />
      <Base />
    </Container>
  );
};

Desktop.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Desktop;
