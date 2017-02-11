import { connect } from 'react-redux';
import { updateHomeMediaImage, stopMediaLoading } from '../actions';
import HomeMedia from '../components/View/HomeMedia';

const mapStateToProps = (state) => {
  return {
    image: state.homeMedia.image,
    loading: state.loading.media,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateImage: (image) => {
      !!image && dispatch(updateHomeMediaImage(image));
    },
    stopLoading: () => {
      dispatch(stopMediaLoading());
    },
  };
};

const HomeMediaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeMedia);

export default HomeMediaContainer;
