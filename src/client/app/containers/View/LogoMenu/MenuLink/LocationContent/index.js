import React, { PropTypes } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import './styles.css';

const LocationContent = (props) => {
  const { location } = props;
  if (!location) return null;

  return (
    <div className="LocationContent">
      { location === 'about' && <About /> }
      { location === 'work' && <Work /> }
      { location === 'contact' && <Contact /> }
    </div>
  );
};

LocationContent.propTypes = {
  location: PropTypes.string.isRequired,
};

export default LocationContent;
