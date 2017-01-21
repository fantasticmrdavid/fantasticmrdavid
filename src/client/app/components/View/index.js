import React, { Component } from 'react';
import './styles.css';
import LogoMenu from './LogoMenu';
import HomeMedia from './HomeMedia';

export default class View extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentLocation: "home",
    };
  }

  updateLocation (newLocation) {
    const { currentLocation } = this.state;
    this.setState({
      currentLocation: currentLocation !== newLocation ? newLocation : "home",
    });
  }

  render () {
    const { store } = this.props;
    const { currentLocation } = this.state;

    return <div className="View">
            <section className="View_control">
              <LogoMenu menu={ store.menu } currentLocation={ currentLocation } updateLocation={ ::this.updateLocation } />
            </section>

            <section className="View_media">
              { currentLocation === "home" && <HomeMedia /> }
            </section>
          </div>;
  }
};
