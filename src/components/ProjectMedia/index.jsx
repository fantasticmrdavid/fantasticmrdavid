import React from 'react';
import PropTypes from 'prop-types';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Image from './Image';

const ProjectMedia = (props) => {
  const { type, platform = null } = props;

  if (platform === 'mobile') return <Mobile {...props} />;
  if (platform === 'desktop') return <Desktop {...props} />;
  if (type === 'image') return <Image {...props} />;
  return null;
};

ProjectMedia.propTypes = {
  platform: PropTypes.string,
  type: PropTypes.string,
};

export default ProjectMedia;
