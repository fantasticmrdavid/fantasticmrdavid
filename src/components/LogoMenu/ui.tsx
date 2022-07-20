import React, { memo, useState } from 'react';
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
import { ContainerProps } from './types';

type UiProps = ContainerProps;

export default memo(
  ({ location }: UiProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleClick = () => setOpen(!isOpen);

    return (
      <Container isOpen={isOpen} onClick={handleClick}>
        <Title>Fantastic Mr David</Title>

        <Nav isOpen={isOpen}>
          { menu.map((item) => (
            <MenuLink
              {...item}
              menuActive={isOpen}
              key={`MenuLink_${item.target}`}
              current={location === item.target}
            />
          )) }
        </Nav>

        <Subtitle isOpen={isOpen}>
          <h2><CogIcon isOpen={isOpen} icon={faCog} />Art + Engineering</h2>
          <Blinker />
        </Subtitle>

        <Cta isOpen={isOpen}>
          <Icon icon={faAngleDown} />
        </Cta>
      </Container>
    );
  },
);
