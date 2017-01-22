import React from 'react';
import "./styles.css";

import Work from "./Work";

export default (props) => {
  const { current, location } = props;
  if (!location) return null;

  if (location === "about") return null;
  if (location === "contact") return null;

  return <div className="LocationContent">
          { location === "work" && <Work /> }
        </div>;
};
