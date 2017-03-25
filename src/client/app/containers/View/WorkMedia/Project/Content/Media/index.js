import React from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Image from './Image';
import './styles.css';

export default (props) => {
  const { type, platform = null } = props;

  return (
    <div className={`ProjectMedia u-${type} u-${platform}`}>
      { platform === 'mobile' && <Mobile {...props} /> }
      { platform === 'desktop' && <Desktop {...props} /> }
      { type === 'image' && <Image {...props} /> }
    </div>
  );
};
