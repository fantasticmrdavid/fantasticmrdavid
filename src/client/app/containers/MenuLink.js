import { connect } from 'react-redux';
import { updateLocation, startMediaLoading, stopMediaLoading } from '../actions';
import MenuLink from '../components/View/LogoMenu/MenuLink';

const mapStateToProps = (state, ownProps) => {
  return {
    label: ownProps.label,
    target: ownProps.target,
    current: ownProps.target === state.currentLocation,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLocation: (target) => {
      dispatch(startMediaLoading());
      dispatch(updateLocation(target));
      setTimeout( () => { dispatch(stopMediaLoading()) } );
    },
  }
}

const MenuLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuLink);

export default MenuLinkContainer;
