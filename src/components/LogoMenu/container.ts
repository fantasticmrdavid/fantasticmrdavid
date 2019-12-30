import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import Ui from './ui';
import { logoMenuActivated, logoMenuDeactivated } from './actions';
import { ContainerProps, DispatchProps, StateProps } from './types';

const mapStateToProps = (state: AppState) => {
  return {
    isActive: state.logoMenu.isActive,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    toggleActive: (isActive: boolean) => {
      return !!isActive ? dispatch(logoMenuDeactivated()) : dispatch(logoMenuActivated());
    },
  };
};

export default connect<StateProps, DispatchProps, ContainerProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
