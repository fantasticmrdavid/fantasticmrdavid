import { connect } from 'react-redux';
import { activateLogoMenu, deactivateLogoMenu } from '../actions';
import LogoMenu from '../components/View/LogoMenu';

const mapStateToProps = (state) => {
  return {
    active: state.logoMenu.active,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActive: (active) => {
      !!active ? dispatch(deactivateLogoMenu()) : dispatch(activateLogoMenu());
    }
  };
}

const LogoMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoMenu);

export default LogoMenuContainer;
