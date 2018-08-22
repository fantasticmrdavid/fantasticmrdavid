import React from 'react';
import { connect } from 'react-redux';
import LogoMenu from 'components/LogoMenu';
import { logoMenuActivated, logoMenuDeactivated } from 'actions';

const LogoMenuContainer = props => <LogoMenu {...props} />;

const mapStateToProps = (state) => {
  return {
    active: state.logoMenu.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActive: (active) => {
      return !!active ? dispatch(logoMenuDeactivated()) : dispatch(logoMenuActivated());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoMenuContainer);
