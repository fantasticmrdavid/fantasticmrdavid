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

const mapStateToProps = (state: AppState) => {
  return {
    location: state.location.current,
    loading: state.loading.media,
    firstLoad: state.loading.firstLoad,
    popup: state.popup,
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

export default connect<StateProps, DispatchProps, UiProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
