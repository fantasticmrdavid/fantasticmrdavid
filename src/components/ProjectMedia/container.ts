import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { StateProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState) => {
  return {
    isLoading: state.loading.media,
  };
};

export default connect<StateProps>(mapStateToProps)(Ui);
