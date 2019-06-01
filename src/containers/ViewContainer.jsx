import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { locationUpdated } from 'actions';
import View from 'components/View';

const ViewContainer = props => <View {...props} />;

const mapStateToProps = state => {
  return {
    location: state.location.current,
    loading: state.loading.media,
    firstLoad: state.loading.firstLoad,
    popup: state.popup,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateLocation: newLocation => {
      const { location } = ownProps;
      const updatedLocation = location !== newLocation ? newLocation : 'home';

      dispatch(locationUpdated(updatedLocation));

      ga('send', 'event', 'Top Menu Navigate', updatedLocation);
    },
  };
};

ViewContainer.propTypes = {
  location: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  firstLoad: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewContainer);
