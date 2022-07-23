import React, { memo, SyntheticEvent, useContext } from 'react';
import { LocationContext } from 'contexts/Location';
import { LOCATIONS } from 'routers/constants';
import {
  Container,
  Label,
} from './styles';
import LocationContent from './LocationContent';
import { useNavigate } from 'react-router-dom';

export interface Props {
  target: typeof LOCATIONS[keyof typeof LOCATIONS],
  isCurrent: boolean,
  isMenuActive: boolean,
  label: string,
}

export default memo(
  (props: Props) => {
    const {
      isCurrent,
      label,
      target,
      isMenuActive,
    } = props;

    const navigate = useNavigate();

    const { setLocation } = useContext(LocationContext);

    const handleNavClick = (e: SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setLocation(isCurrent ? LOCATIONS.home : target);
      navigate(`/${isCurrent ? '' : target}`, { replace: true });
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
