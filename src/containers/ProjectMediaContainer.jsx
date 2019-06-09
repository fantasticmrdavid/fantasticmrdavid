import { connect } from 'react-redux';
import ProjectMedia from 'components/ProjectMedia';

const mapStateToProps = state => {
  return {
    loading: state.loading.media,
  };
};

export default connect(mapStateToProps)(ProjectMedia);
