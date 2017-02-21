import React, { Component } from 'react';
import "./styles.css";
import LocationContent from "./LocationContent";

export default class MenuLink extends Component {
  constructor () {
    super();
    this.boundHandleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick (e) {
    const { target, current, updateLocation } = this.props;
    e.preventDefault();
    e.stopPropagation();
    updateLocation(current ? "home" : target);
  }

  render () {
    const { label, target, current } = this.props;
    return <div className={`MenuLink ${ current && "u-current" }`} onClick={ this.boundHandleNavClick }>
              <div className={`MenuLink_label u-${target}`} data-target={ target } onClick={ this.boundHandleNavClick }>{ label }</div>
              <LocationContent location={ target } />
            </div>;
  }
}
