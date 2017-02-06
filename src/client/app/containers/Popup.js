import { connect } from 'react-redux';
import { hidePopup } from '../actions';
import Popup from '../components/Popup';

const mapStateToProps = (state) => {
  return {
    ...state.popup,
    active: state.popup.active,
    loading: state.loading.popup,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {
      dispatch(hidePopup());
    }
  }
}

const PopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);

export default PopupContainer;
