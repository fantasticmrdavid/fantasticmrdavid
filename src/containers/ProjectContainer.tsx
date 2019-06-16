import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { workMediaLocationUpdated, popupShowed } from 'actions';
import { AppState } from 'reducers';
import Project, { Props as UiProps } from 'components/Project';

type StateProps = {
  current: boolean,
  isCurrent: boolean,
  parentLoading: boolean,
}

type DispatchProps = {
  updateCurrent: (target: string) => void,
  showPopup: (popup: any) => void,
}

const mapStateToProps = (state: AppState, ownProps: UiProps) => {
  return {
    ...ownProps,
    current: state.workMedia.location,
    isCurrent: state.workMedia.location === ownProps.target,
    parentLoading: state.loading.media || state.loading.images,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateCurrent: (target: string) => {
      dispatch(workMediaLocationUpdated(target));
    },
    showPopup: (popup: any) => {
      dispatch(popupShowed(popup));
    },
  };
};

export default connect<StateProps, DispatchProps, UiProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
