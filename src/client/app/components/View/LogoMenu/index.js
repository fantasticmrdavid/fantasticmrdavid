import React, { Component } from 'react';
import "./styles.css";

export default class LogoMenu extends Component {
  constructor (props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleActive (e) {
    if(!e.target.dataset.target) {
      let state = this.state;
      this.setState({
        ...state,
        active: !state.active,
    });}
  }

  handleNavClick (e) {
    const { updateLocation } = this.props;
    e.preventDefault();
    updateLocation(e.target.dataset.target);
  }

  render () {
    let { active } = this.state;

    return <div className={`LogoMenu ${!!active && 'u-active'}`} onClick={ ::this.toggleActive }>
            <h1 className="LogoMenu_title">Fantastic Mr David</h1>
            <div className="LogoMenu_nav">
              <a data-target="about" onClick={ ::this.handleNavClick }>About</a>
              <a data-target="work" onClick={ ::this.handleNavClick }>Work</a>
              <a data-target="contact" onClick={ ::this.handleNavClick }>Contact</a>
            </div>
            <h2 className="LogoMenu_subtitle"><i className="fa fa-cog" /> Art + Engineering</h2>
          </div>;
  }
}
