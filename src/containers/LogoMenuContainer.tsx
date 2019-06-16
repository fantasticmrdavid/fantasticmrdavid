import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import LogoMenu from 'components/LogoMenu';
import { logoMenuActivated, logoMenuDeactivated } from 'actions';
import { AppState } from 'reducers';

type StateProps = {
  active: boolean,
}

type DispatchProps = {
  toggleActive: (active: boolean) => void,
}

const mapStateToProps = (state: AppState) => {
  return {
    active: state.logoMenu.active,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    toggleActive: (active: boolean) => {
      return !!active ? dispatch(logoMenuDeactivated()) : dispatch(logoMenuActivated());
    },
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(LogoMenu);
