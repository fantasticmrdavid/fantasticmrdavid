import React, { PropTypes } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Image from './Image';
import './styles.css';

const Media = (props) => {
  const { type, platform = null } = props;

  return (
    <div className={`ProjectMedia u-${type} u-${platform}`}>
      { platform === 'mobile' && <Mobile {...props} /> }
      { platform === 'desktop' && <Desktop {...props} /> }
      { type === 'image' && <Image {...props} /> }
    </div>
  );
};

Media.propTypes = {
  type: PropTypes.string,
  platform: PropTypes.string,
};

export default Media;
