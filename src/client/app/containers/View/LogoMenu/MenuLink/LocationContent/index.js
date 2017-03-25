import React from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import './styles.css';

export default (props) => {
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
