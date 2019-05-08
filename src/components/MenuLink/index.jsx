import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LocationContent from './LocationContent';
import styles from './styles.css';

class MenuLink extends PureComponent {
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

MenuLink.propTypes = {
  updateLocation: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  current: PropTypes.bool,
  menuActive: PropTypes.bool,
  label: PropTypes.string,
};

export default MenuLink;
