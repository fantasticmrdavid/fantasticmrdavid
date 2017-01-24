import React from 'react';
import './styles.css';

export default (props) => {
  const { title, thumbnail, url } = props;
  const bgStyle = { backgroundImage: `url(${thumbnail})`};

  return <div className="ProjectMedia_mobile">
          <div className="ProjectMedia_mobileOuterFrame u-stroke">
            <div className="ProjectMedia_mobileScreen u-stroke">
              <a href={ url } target="_blank"><img src={ thumbnail } alt={ title } /></a>
            </div>
            <div className="ProjectMedia_mobileHomeButton u-stroke" />
            <div className="ProjectMedia_mobileUpButton u-stroke" />
            <div className="ProjectMedia_mobileDownButton u-stroke" />
          </div>
        </div>
}
