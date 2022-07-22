import React, { memo, SyntheticEvent, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LocationContext } from 'contexts/Location';
import { LOCATIONS } from 'routers/Routes';
import {
  Container,
  Label,
} from './styles';
import LocationContent from './LocationContent';

export interface Props {
  target: keyof typeof LOCATIONS,
  isCurrent: boolean,
  isMenuActive: boolean,
  label: string,
}

export default memo(
  (props: Props & RouteComponentProps) => {
    const {
      isCurrent,
      label,
      target,
      history,
      isMenuActive,
    } = props;

    const { updateLocation } = useContext(LocationContext);

    const handleNavClick = (e: SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      updateLocation(isCurrent ? LOCATIONS.home : target);
      history.push(`/${isCurrent ? '' : target}`);
    };

    return (
      <Container>
        <Label
          isCurrent={isCurrent}
          isMenuActive={isMenuActive}
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
