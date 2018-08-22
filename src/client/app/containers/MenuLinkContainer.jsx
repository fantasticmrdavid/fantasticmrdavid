import React from 'react';
import { connect } from 'react-redux';
import { locationUpdated } from 'actions';
import MenuLink from 'components/MenuLink';

const MenuLinkContainer = props => <MenuLink {...props} />;

const mapStateToProps = (state, ownProps) => {
  return {
    label: ownProps.label,
    target: ownProps.target,
    current: ownProps.target === state.location.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (target) => {
      dispatch(locationUpdated(target));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuLinkContainer);
