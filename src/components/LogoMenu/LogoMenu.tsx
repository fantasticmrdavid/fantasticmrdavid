import React, { memo, useState } from 'react';
import { FaAngleDown, FaCog } from 'react-icons/fa';
import { Blinker } from 'components/Blinker/Blinker';
import { MenuLink } from 'components/MenuLink/MenuLink';
import { LOCATIONS } from 'routers/constants';
import menu from './menu';
import {
  Container,
  Title,
  Nav,
  Subtitle,
  Cta,
  CogIconWrapper,
} from './logoMenu.styles';

export type LogoMenuProps = { location?: typeof LOCATIONS[keyof typeof LOCATIONS] };

export const LogoMenu = memo(
  ({ location }: LogoMenuProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleClick = () => setOpen(!isOpen);

    return (
      <Container isOpen={isOpen} onClick={handleClick}>
        <Title>Fantastic Mr David</Title>

        <Nav isOpen={isOpen}>
          { menu.map((item) => (
            <MenuLink
              label={item.label}
              target={item.target}
              isMenuActive={isOpen}
              key={`MenuLink_${item.target}`}
              isCurrent={location === item.target}
            />
          )) }
        </Nav>

        <Subtitle isOpen={isOpen}>
          <h2><CogIconWrapper isOpen={isOpen}><FaCog /></CogIconWrapper>Art + Engineering</h2>
          <Blinker />
        </Subtitle>

        <Cta isOpen={isOpen}>
          <FaAngleDown />
        </Cta>
      </Container>
    );
  },
);
