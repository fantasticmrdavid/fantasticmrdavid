import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { popupHidden } from './actions';
import { ContainerProps, StateProps, DispatchProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState) => {
  return {
    ...state.popup,
    isActive: state.popup.isActive,
    isLoading: state.loading.popup,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return { close: () => dispatch(popupHidden()) };
};

export default connect<StateProps, DispatchProps, ContainerProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
