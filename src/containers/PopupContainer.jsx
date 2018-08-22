import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { popupHidden } from 'actions';
import Popup from 'components/Popup';

const PopupContainer = props => <Popup {...props} />;

const mapStateToProps = (state) => {
  return {
    ...state.popup,
    active: state.popup.active,
    loading: state.loading.popup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { close: () => dispatch(popupHidden()) };
};

PopupContainer.propTypes = {
  close: PropTypes.func.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  orientation: PropTypes.string,
  active: PropTypes.bool,
  loading: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopupContainer);
