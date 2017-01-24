import React from 'react';
import './styles.css';

export default (props) => {
  const { title, thumbnail, url } = props;
  const bgStyle = { backgroundImage: `url(${thumbnail})`};

  return <div className="ProjectMedia_desktop">
          <div className="ProjectMedia_desktopOuterFrame u-stroke">
            <div className="ProjectMedia_desktopScreen u-stroke">
              <a href={ url } target="_blank"><img src={ thumbnail } alt={ title } /></a>
            </div>
          </div>
          <div className="ProjectMedia_desktopStand u-stroke" />
          <div className="ProjectMedia_desktopBase u-stroke" />
        </div>
}
