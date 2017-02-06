import { connect } from 'react-redux';
import { updateLocation, startMediaLoading, stopMediaLoading } from '../actions';
import View from '../components/View';

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation,
    loading: state.loading.media,
    firstLoad: state.loading.firstLoad,
    popup: state.popup,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateLocation: (newLocation) => {
      const { currentLocation } = ownProps;
      let updatedLocation = currentLocation !== newLocation ? newLocation : "home";

      dispatch(startMediaLoading);
      dispatch(updateLocation(updateLocation));

      ga('send', 'event', 'Top Menu Navigate', updatedLocation);
    }
  }
}

const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default ViewContainer;
