import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import {
  workMediaLocationUpdated,
} from './actions';
import { DispatchProps, StateProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState) => {
  return {
    current: state.workMedia.location,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setTarget: (target: string) => dispatch(workMediaLocationUpdated(target)),
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
