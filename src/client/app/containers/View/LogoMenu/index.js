import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logoMenuActivated, logoMenuDeactivated } from '../../../actions';
import MenuLink from './MenuLink';
import Blinker from '../../../components/Blinker';
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
          Fantastic Mr David
        </h1>

        <nav className={styles.nav}>
          { menu.map((item) => { return <MenuLink {...item} menuActive={!!active} key={`MenuLink_${item.target}`} />; }) }
        </nav>

        <div className={styles.subtitle}>
          <h2><i className="fa fa-cog" /> Art + Engineering</h2>
          <Blinker />
        </div>

        <a className={styles.startCta}>
          <i className="fa fa-angle-down" />
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.logoMenu.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActive: (active) => {
      return !!active ? dispatch(logoMenuDeactivated()) : dispatch(logoMenuActivated());
    },
  };
};

LogoMenu.propTypes = {
  toggleActive: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoMenu);
