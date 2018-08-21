import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Image from './Image';
import styles from './styles.css';

const Media = (props) => {
  const { type, platform = null, loading } = props;

  return (
    <div className={`{styles.ProjectMedia} ${styles[type]} ${styles[platform]} ${!!loading && styles.loading}`}>
      { platform === 'mobile' && <Mobile {...props} /> }
      { platform === 'desktop' && <Desktop {...props} /> }
      { type === 'image' && <Image {...props} /> }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading.media,
  };
};

Media.propTypes = {
  type: PropTypes.string,
  platform: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(
  mapStateToProps,
)(Media);
