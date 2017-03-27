import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { popupHidden } from '../../actions';
import './styles.css';

class Popup extends Component {
  constructor() {
    super();
    this.boundHandleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    e.preventDefault();

    const { close } = this.props;
    close(e);
  }
  render() {
    const { title, url, orientation, active, loading } = this.props;

    return (
      <div className={`Popup u-${!!loading && 'loading'} u-${!!active && 'active'}`}>
        <div className="Lightbox" onClick={this.boundHandleClose} />
        <div className="Popup_dialog">
          <div className="Popup_close" onClick={this.boundHandleClose}>X</div>
          { !!url && <img className={`u-${orientation}`} src={url} alt={title} /> }
        </div>
      </div>
    );
  }
}

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

Popup.propTypes = {
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
)(Popup);
