import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { popupHidden } from 'actions';
import { AppState } from 'reducers';
import Popup from 'components/Popup';

type StateProps = {
  active: boolean,
  loading: boolean,
}

type DispatchProps = {
  close: () => void;
}

const mapStateToProps = (state: AppState) => {
  return {
    ...state.popup,
    active: state.popup.active,
    loading: state.loading.popup,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return { close: () => dispatch(popupHidden()) };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Popup);
