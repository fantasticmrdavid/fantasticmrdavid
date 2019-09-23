import { connect } from 'react-redux';
import { AppState } from 'reducers';
import Ui from './ui';

type StateProps = {
  loading: boolean,
};

const mapStateToProps = (state: AppState) => {
  return {
    loading: state.loading.media,
  };
};

export default connect<StateProps>(mapStateToProps)(Ui);
