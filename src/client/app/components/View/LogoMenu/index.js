import React, { Component } from 'react';
import "./styles.css";
import menu from './menu';
import MenuLinkContainer from "../../../containers/MenuLink";
import Blinker from "../../Blinker";

export default class LogoMenu extends Component {
  constructor () {
    super();
    this.boundToggleActive = this.localToggleActive.bind(this);
  }

  localToggleActive () {
    const { active, toggleActive } = this.props;
    toggleActive(active);
  }

  render () {
    const { active, toggleActive } = this.props;

    return <div className={`LogoMenu ${!!active && 'u-active'}`} onClick={ this.boundToggleActive }>
            <h1 className="LogoMenu_title">
              Fantastic Mr David
            </h1>

            <nav className="LogoMenu_nav">
              { menu.map((item, i) => { return <MenuLinkContainer { ...item } key={`MenuLink_${i}`} />; }) }
            </nav>

            <div className="LogoMenu_subtitle">
              <h2><i className="fa fa-cog" /> Art + Engineering</h2>
              <Blinker />
            </div>

            <a className="LogoMenu_startCta">
              <i className="fa fa-angle-down" />
            </a>
          </div>;
  }
}
