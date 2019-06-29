import React, { memo } from 'react';
import { faAngleDown, faCog } from '@fortawesome/free-solid-svg-icons';
import Blinker from 'components/Blinker';
import MenuLink from 'components/MenuLink';
import menu from './menu';
import * as styles from './styles';

interface Props {
  active: boolean,
  location?: string,
  toggleActive: (...args: any[]) => any,
}

const {
  Container,
  Title,
  Nav,
  Subtitle,
  Cta,
  CogIcon,
  Icon,
} = styles;

export default memo(
  ({ active, location, toggleActive }: Props) => {
    const handleClick = () => toggleActive(active);

    return (
      <Container active={active} onClick={handleClick}>
        <Title>Fantastic Mr David</Title>

        <Nav active={active}>
          { menu.map(item => (
            <MenuLink
              {...item}
              menuActive={!!active}
              key={`MenuLink_${item.target}`}
              current={location === item.target}
            />
          )) }
        </Nav>

        <Subtitle active={active}>
          <h2><CogIcon active={active} icon={faCog} />Art + Engineering</h2>
          <Blinker />
        </Subtitle>

        <Cta active={active}>
          <Icon icon={faAngleDown} />
        </Cta>
      </Container>
    );
  },
);
