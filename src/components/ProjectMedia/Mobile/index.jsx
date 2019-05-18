import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Mobile = ({ title, thumbnail, url }) => {
  const handleClick = useCallback(() => ga('send', 'event', 'Media Mobile Website click', title), [title]);

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
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image src={thumbnail} alt={title} onClick={handleClick} />
        </a>
      </Screen>
      <HomeButton />
      <UpButton />
      <DownButton />
    </OuterFrame>
  );
};

Mobile.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Mobile;
