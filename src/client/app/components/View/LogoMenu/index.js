import React, { Component } from 'react';
import "./styles.css";
import MenuLink from "./MenuLink";

export default class LogoMenu extends Component {
  constructor (props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleActive (e) {
    let state = this.state;

    this.setState({
      ...state,
      active: !state.active,
    });
  }

  render () {
    const { menu, currentLocation, updateLocation } = this.props;
    let { active } = this.state;

    return <div className={`LogoMenu ${!!active && 'u-active'}`} onClick={ ::this.toggleActive }>
            <h1 className="LogoMenu_title">Fantastic Mr David</h1>
            <div className="LogoMenu_nav">
              { menu.map((item, i) => { return <MenuLink
                  key={`MenuLink_${i}`}
                  { ...item }
                  current={ currentLocation === item.target }
                  updateLocation={ updateLocation } />; })
              }
            </div>
            <h2 className="LogoMenu_subtitle"><i className="fa fa-cog" /> Art + Engineering</h2>
          </div>;
  }
}
