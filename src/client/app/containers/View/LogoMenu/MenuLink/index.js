import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { locationUpdated } from 'actions';
import LocationContent from './LocationContent';
import styles from './styles.css';

class MenuLink extends Component {
  constructor() {
    super();
    this.boundHandleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(e) {
    const { target, current, updateLocation } = this.props;
    e.preventDefault();
    e.stopPropagation();
    updateLocation(current ? 'home' : target);
  }

  render() {
    const { label, target, current, menuActive } = this.props;
    return (
      <div className={`${styles.MenuLink} ${current && styles.current} ${menuActive && styles.menuActive}`} onClick={this.boundHandleNavClick}>
        <div className={`${styles.label} ${styles[target]}`} data-target={target} onClick={this.boundHandleNavClick}>{ label }</div>
        <LocationContent location={target} current={current} />
      </div>
    );
  }
}

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

MenuLink.propTypes = {
  updateLocation: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  current: PropTypes.bool,
  menuActive: PropTypes.bool,
  label: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuLink);
