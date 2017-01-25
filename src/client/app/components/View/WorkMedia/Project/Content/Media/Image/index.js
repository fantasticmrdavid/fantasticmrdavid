import React from 'react';
import './styles.css';

export default (props) => {
  const { title, thumbnail, url } = props;
  const bgStyle = { backgroundImage: `url(${thumbnail})`};

  return <div className="ProjectMedia_image">
          <div className="ProjectMedia_imageFrame u-stroke">
            <a href={ url } target="_blank"><img className="u-stroke" src={ thumbnail } alt={ title } /></a>
          </div>
        </div>
}
