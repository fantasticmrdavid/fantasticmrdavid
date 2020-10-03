import React, { memo } from 'react';
import { faAngleDown, faCog } from '@fortawesome/free-solid-svg-icons';
import Blinker from 'components/Blinker';
import MenuLink from 'components/MenuLink';
import menu from './menu';
import {
  Container,
  Title,
  Nav,
  Subtitle,
  Cta,
  CogIcon,
  Icon,
} from './styles';
import { ContainerProps, DispatchProps, StateProps } from './types';

type UiProps = ContainerProps & DispatchProps & StateProps;

export default memo(
  ({ isActive, location, toggleActive }: UiProps) => {
    const handleClick = () => toggleActive(isActive);

    return (
      <Container isActive={isActive} onClick={handleClick}>
        <Title>Fantastic Mr David</Title>

        <Nav isActive={isActive}>
          { menu.map((item) => (
            <MenuLink
              {...item}
              menuActive={isActive}
              key={`MenuLink_${item.target}`}
              current={location === item.target}
            />
          )) }
        </Nav>

        <Subtitle isActive={isActive}>
          <h2><CogIcon isActive={isActive} icon={faCog} />Art + Engineering</h2>
          <Blinker />
        </Subtitle>

        <Cta isActive={isActive}>
          <Icon icon={faAngleDown} />
        </Cta>
      </Container>
    );
  },
);
