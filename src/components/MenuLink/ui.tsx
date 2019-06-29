import React, { memo, SyntheticEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
  (props: Props & RouteComponentProps) => {
    const {
      label,
      target,
      current,
      history,
      menuActive,
      updateLocation,
    } = props;

    const handleNavClick = (e:SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      updateLocation(current ? 'home' : target);
      history.push(`/${current ? '' : target}`);
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
