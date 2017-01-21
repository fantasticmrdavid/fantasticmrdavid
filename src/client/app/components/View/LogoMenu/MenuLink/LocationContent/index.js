import React from 'react';
import "./styles.css";

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

export default (props) => {
  const { current, location } = props;
  if (!location) return null;

  return <div className="LocationContent">
          { location === "about" && <About /> }
          { location === "work" && <Work /> }
          { location === "contact" && <Contact /> }
        </div>;
};
