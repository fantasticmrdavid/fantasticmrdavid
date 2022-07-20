import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { DispatchProps, StateProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState) => {
  return {
    loading: state.loading.media,
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(mapStateToProps)(Ui);
