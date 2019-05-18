import React, { memo } from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import * as styles from './styles';

const LocationContent = memo(
  ({ location, current }) => {
    const { Content } = styles;

    if (!location) return null;

    return (
      <Content current={current}>
        { location === 'about' && <About /> }
        { location === 'work' && <Work /> }
        { location === 'contact' && <Contact /> }
      </Content>
    );
  },
);

LocationContent.propTypes = {
  location: PropTypes.string.isRequired,
  current: PropTypes.bool,
};

export default LocationContent;
