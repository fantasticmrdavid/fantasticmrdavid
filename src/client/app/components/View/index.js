import React, { Component } from 'react';
import './styles.css';
import LogoMenu from './LogoMenu';

export default class View extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentLocation: "home",
    };
  }

  updateLocation (newLocation) {
    this.setState({
      currentLocation: newLocation,
    });
  }

  render () {
    const { currentLocation } = this.state;

    return <div className="View">
            <section className="View_control">
              <LogoMenu currentLocation={ currentLocation } updateLocation={ ::this.updateLocation } />
            </section>

            <section className="View_media">
            </section>
          </div>;
  }
};
