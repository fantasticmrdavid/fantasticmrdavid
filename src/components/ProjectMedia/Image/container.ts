import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { popupShowed } from './actions';
import Ui, { Props as UiProps } from './ui';

type DispatchProps = {
  popupShowed: (popup: any) => void,
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    showPopup: (popup: any) => {
      dispatch(popupShowed(popup));
    },
  };
};

export default connect<{}, DispatchProps, UiProps, AppState>(
  null,
  mapDispatchToProps,
)(Ui);
