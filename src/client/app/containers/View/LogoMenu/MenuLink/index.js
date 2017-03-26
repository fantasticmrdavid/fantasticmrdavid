import React, { Component } from 'react';
import { connect } from 'react-redux';
import { locationUpdated } from '../../../../actions';
import LocationContent from './LocationContent';
import './styles.css';

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
    const { label, target, current } = this.props;
    return (
      <div className={`MenuLink ${current && 'u-current'}`} onClick={this.boundHandleNavClick}>
        <div className={`MenuLink_label u-${target}`} data-target={target} onClick={this.boundHandleNavClick}>{ label }</div>
        <LocationContent location={target} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuLink);
