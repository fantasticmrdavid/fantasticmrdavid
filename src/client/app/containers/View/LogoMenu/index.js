import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateLogoMenu, deactivateLogoMenu } from '../../../actions';
import MenuLink from './MenuLink';
import Blinker from '../../../components/Blinker';
import menu from './menu';
import './styles.css';

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
      <div className={`LogoMenu ${!!active && 'u-active'}`} onClick={this.boundToggleActive}>
        <h1 className="LogoMenu_title">
          Fantastic Mr David
        </h1>

        <nav className="LogoMenu_nav">
          { menu.map((item) => { return <MenuLink {...item} key={`MenuLink_${item.target}`} />; }) }
        </nav>

        <div className="LogoMenu_subtitle">
          <h2><i className="fa fa-cog" /> Art + Engineering</h2>
          <Blinker />
        </div>

        <a className="LogoMenu_startCta">
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
      return !!active ? dispatch(deactivateLogoMenu()) : dispatch(activateLogoMenu());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoMenu);
