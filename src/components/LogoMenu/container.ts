import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import Ui from './ui';
import { logoMenuActivated, logoMenuDeactivated } from './actions';

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
)(Ui);
