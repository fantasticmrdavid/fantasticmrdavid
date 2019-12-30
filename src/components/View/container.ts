import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { AppState } from 'reducers';
import { locationUpdated } from './actions';
import { ContainerProps, DispatchProps, StateProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState, ownProps: ContainerProps) => {
  const { loading, popup } = state;
  const { location } = ownProps;
  return {
    location: state.location.current || location,
    isLoading: loading.media,
    isFirstLoad: loading.firstLoad,
    popup,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: ContainerProps) => {
  return {
    updateLocation: (newLocation: string) => {
      const { location } = ownProps;
      const updatedLocation = location !== newLocation ? newLocation : 'home';

      dispatch(locationUpdated(updatedLocation));

      ReactGA.event({
        category: 'Navigation',
        action: 'Location Updated',
        label: updatedLocation,
      });
    },
  };
};

export default connect<StateProps, DispatchProps, ContainerProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
