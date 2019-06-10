import { connect } from 'react-redux';
import { AppState } from 'reducers';
import ProjectMedia from 'components/ProjectMedia';

type StateProps = {
  loading: boolean,
}

const mapStateToProps = (state: AppState) => {
  return {
    loading: state.loading.media,
  };
};

export default connect<StateProps>(mapStateToProps)(ProjectMedia);
