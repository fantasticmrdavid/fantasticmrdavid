import React, { memo } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';
import LocationContent from './LocationContent';

const MenuLink = memo(
  (props) => {
    const {
      label,
      target,
      current,
      menuActive,
      updateLocation,
    } = props;

    const handleNavClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      updateLocation(current ? 'home' : target);
    };

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
          onClick={handleNavClick}
        >
          { label }
        </Label>
        <LocationContent location={target} current={current} />
      </Container>
    );
  },
);

MenuLink.propTypes = {
  updateLocation: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  current: PropTypes.bool,
  menuActive: PropTypes.bool,
  label: PropTypes.string,
};

export default MenuLink;
