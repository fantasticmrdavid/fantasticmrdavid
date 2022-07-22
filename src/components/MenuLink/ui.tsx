import React, { memo, SyntheticEvent, useContext } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { LocationContext } from 'contexts/Location';
import {
  Container,
  Label,
} from './styles';
import LocationContent from './LocationContent';

export interface Props {
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
      history,
      menuActive,
    } = props;

    const { location, updateLocation } = useContext(LocationContext);
    const isCurrent = target === location;

    const handleNavClick = (e: SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      updateLocation(isCurrent ? 'home' : target);
      history.push(`/${isCurrent ? '' : target}`);
    };

    return (
      <Container>
        <Label
          isCurrent={isCurrent}
          menuActive={menuActive}
          target={target}
          onClick={handleNavClick}
        >
          { label }
        </Label>
        <LocationContent location={target} isCurrent={isCurrent} />
      </Container>
    );
  },
);
