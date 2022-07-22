import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { ContainerProps, StateProps } from './types';
import Ui from './ui';

const mapStateToProps = (state: AppState) => {
  const { popup } = state;
  return {
    popup,
  };
};

export default connect<StateProps, ContainerProps, AppState>(
  mapStateToProps,
)(Ui);
