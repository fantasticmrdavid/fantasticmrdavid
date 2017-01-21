import React, { Component } from 'react';
import "./styles.css";
import LocationContent from "./LocationContent";

export default class MenuLink extends Component {
  handleNavClick (e) {
    const { target, updateLocation } = this.props;
    e.preventDefault();
    e.stopPropagation();
    updateLocation(target);
  }

  render () {
    const { label, target, onClick, current } = this.props;
    return <div className={`MenuLink ${ current && "u-current" }`} onClick={ ::this.handleNavClick }>
              <div className={`MenuLink_label u-${target}`} data-target={ target } onClick={ ::this.handleNavClick }>{ label }</div>
              <LocationContent location={ target } />
            </div>;
  }
}
