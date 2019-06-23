import React, { memo, SyntheticEvent } from 'react';
import * as styles from './styles';
import LocationContent from './LocationContent';

export interface Props {
  updateLocation: (...args: any[]) => any,
  target: string,
  current: boolean,
  menuActive: boolean,
  label: string,
}

export default memo(
  (props: Props) => {
    const {
      label,
      target,
      current,
      menuActive,
      updateLocation,
    } = props;

    const handleNavClick = (e:SyntheticEvent) => {
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
