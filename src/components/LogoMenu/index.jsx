import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faAngleDown, faCog } from '@fortawesome/free-solid-svg-icons';
import Blinker from 'components/Blinker';
import Icon from 'components/Icon';
import MenuLinkContainer from 'containers/MenuLinkContainer';
import menu from './menu';
import styles from './styles.css';

class LogoMenu extends Component {
  constructor() {
    super();
    this.boundToggleActive = this.localToggleActive.bind(this);
  }

  localToggleActive() {
    const { active, toggleActive } = this.props;
    toggleActive(active);
  }

  render() {
    const { active } = this.props;
    return (
      <div className={`${styles.LogoMenu} ${!!active && styles.active}`} onClick={this.boundToggleActive}>
        <h1 className={styles.title}>
          Fantastic Mr David!
        </h1>

        <nav className={styles.nav}>
          { menu.map((item) => { return <MenuLinkContainer {...item} menuActive={!!active} key={`MenuLink_${item.target}`} />; }) }
        </nav>

        <div className={styles.subtitle}>
          <h2><Icon className={styles.icon} icon={faCog} />Art + Engineering</h2>
          <Blinker />
        </div>

        <a className={styles.startCta}>
          <Icon icon={faAngleDown} />
        </a>
      </div>
    );
  }
}

LogoMenu.propTypes = {
  toggleActive: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default LogoMenu;
