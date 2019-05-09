import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import LocationContent from './LocationContent';

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
    const {
      label,
      target,
      current,
      menuActive,
    } = this.props;

    const {
      Container,
      Label,
    } = styles;

    return (
      <Container>
        <Label
          current={current}
          menuActive={menuActive}
          target={target}
          onClick={this.boundHandleNavClick}
        >
          { label }
        </Label>
        <LocationContent location={target} current={current} />
      </Container>
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
