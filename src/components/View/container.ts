import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { ContainerProps, DispatchProps, StateProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState) => {
  const { loading, popup } = state;
  return {
    isLoading: loading.media,
    isFirstLoad: loading.firstLoad,
    popup,
  };
};

export default connect<StateProps, DispatchProps, ContainerProps, AppState>(
  mapStateToProps,
)(Ui);
