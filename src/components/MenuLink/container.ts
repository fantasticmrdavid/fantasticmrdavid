import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { locationUpdated } from './actions';
import Ui, { Props as UiProps } from './ui';

type StateProps = {
  current: boolean,
}

type DispatchProps = {
  updateLocation: (target: string) => void,
}

type ContainerProps = UiProps & RouteComponentProps;

const mapStateToProps = (state: AppState, ownProps: UiProps) => {
  const { current, target } = ownProps;
  return {
    current: current || target === state.location.current,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateLocation: (target: string) => {
      dispatch(locationUpdated(target));
    },
  };
};

export default connect<StateProps, DispatchProps, UiProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Ui));
