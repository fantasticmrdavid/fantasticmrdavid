import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { homeMediaImageUpdated, mediaLoadingStopped } from 'actions';
import styles from './styles.css';

const HOME_IMAGES = [
  {
    name: 'legoFlinders',
    src: '/assets/images/legoFlinders.jpg',
  },
];

class HomeMedia extends Component {
  componentWillMount() {
    const { updateImage } = this.props;
    const image = HOME_IMAGES[Math.floor(Math.random() * HOME_IMAGES.length)];
    updateImage(image);
  }

  componentDidMount() {
    const { image, stopLoading } = this.props;
    const bg = new Image();
    bg.onload = () => {
      stopLoading();
    };
    bg.src = image.src;

    return bg;
  }

  render() {
    const { loading, image } = this.props;
    const bgStyle = { backgroundImage: `url(${image.src})` };
    return <div className={`${styles.HomeMedia} ${loading && styles.loading}`} style={bgStyle} />;
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.homeMedia.image,
    loading: state.loading.media,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateImage: (image) => {
      dispatch(homeMediaImageUpdated(image));
    },
    stopLoading: () => {
      dispatch(mediaLoadingStopped());
    },
  };
};

HomeMedia.propTypes = {
  updateImage: PropTypes.func.isRequired,
  stopLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  image: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeMedia);
