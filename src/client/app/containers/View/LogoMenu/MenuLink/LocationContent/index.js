import React, { PropTypes } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import styles from './styles.css';

const LocationContent = (props) => {
  const { location, current } = props;
  if (!location) return null;

  return (
    <div className={`${styles.LocationContent} ${!!current && styles.current}`}>
      { location === 'about' && <About /> }
      { location === 'work' && <Work /> }
      { location === 'contact' && <Contact /> }
    </div>
  );
};

LocationContent.propTypes = {
  location: PropTypes.string.isRequired,
  current: PropTypes.bool,
};

export default LocationContent;
