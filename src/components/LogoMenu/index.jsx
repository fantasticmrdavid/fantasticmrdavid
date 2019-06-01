import React from 'react';
import PropTypes from 'prop-types';
import { faAngleDown, faCog } from '@fortawesome/free-solid-svg-icons';
import Blinker from 'components/Blinker';
import MenuLinkContainer from 'containers/MenuLinkContainer';
import menu from './menu';
import * as styles from './styles';

const LogoMenu = ({ active, toggleActive }) => {
  const handleClick = () => toggleActive(active);
  const {
    Container,
    Title,
    Nav,
    Subtitle,
    Cta,
    CogIcon,
    Icon,
  } = styles;

  return (
    <Container active={active} onClick={handleClick}>
      <Title>Fantastic Mr David</Title>

      <Nav active={active}>
        { menu.map(item => { return <MenuLinkContainer {...item} menuActive={!!active} key={`MenuLink_${item.target}`} />; }) }
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
};

LogoMenu.propTypes = {
  toggleActive: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default LogoMenu;
