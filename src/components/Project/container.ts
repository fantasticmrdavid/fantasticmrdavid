import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { workMediaLocationUpdated } from './actions';
import Ui, { Props as UiProps } from './ui';

type StateProps = {
  current: boolean,
  isCurrent: boolean,
  parentLoading: boolean,
}

type DispatchProps = {
  updateCurrent: (target: string) => void,
}

const mapStateToProps = (state: AppState, ownProps: UiProps) => {
  const { loading, workMedia } = state;
  return {
    ...ownProps,
    current: workMedia.location,
    isCurrent: workMedia.location === ownProps.target,
    parentLoading: loading.media || loading.images,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateCurrent: (target: string) => {
      dispatch(workMediaLocationUpdated(target));
    },
  };
};

export default connect<StateProps, DispatchProps, UiProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
