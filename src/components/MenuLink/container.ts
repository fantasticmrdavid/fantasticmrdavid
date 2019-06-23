import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { locationUpdated } from './actions';
import Ui, { Props as UiProps } from './ui';

type StateProps = {
  current: boolean,
}

type DispatchProps = {
  updateLocation: (target: string) => void,
}

const mapStateToProps = (state: AppState, ownProps: UiProps) => {
  const { target } = ownProps;
  return {
    current: target === state.location.current,
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
)(Ui);
