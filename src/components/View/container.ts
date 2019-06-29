import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { AppState } from 'reducers';
import { locationUpdated } from './actions';
import Ui, { Props as UiProps } from './ui';

type StateProps = {
  location: string,
  loading: boolean,
  firstLoad: boolean,
  popup: any,
}

type DispatchProps = {
  updateLocation: (newLocation: string) => void,
}

type ContainerProps = {
  location?: string,
}

const mapStateToProps = (state: AppState, ownProps: ContainerProps) => {
  const { loading, popup } = state;
  const { location } = ownProps;
  return {
    location: state.location.current || location,
    loading: !location && loading.media,
    firstLoad: !location && loading.firstLoad,
    popup,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: UiProps) => {
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
