import React, { Component } from 'react';
import './styles.css';
import LogoMenu from './LogoMenu';
import HomeMedia from './HomeMedia';

export default class View extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentLocation: "home",
      mediaLoading: true,
      firstLoad: true,
    };
  }

  updateLocation (newLocation) {
    const { currentLocation } = this.state;

    this.startMediaLoading();
    this.setState({
      currentLocation: currentLocation !== newLocation ? newLocation : "home",
    });
  }

  startMediaLoading() {
    this.setState({ mediaLoading: true });
  }

  stopMediaLoading() {
    this.setState({
      mediaLoading: false,
      firstLoad: false,
    });
  }

  render () {
    const { store } = this.props;
    const { currentLocation, mediaLoading, firstLoad } = this.state;
    let firstMediaLoading = mediaLoading && firstLoad;

    return <div className={`View u-${ firstMediaLoading && 'firstMediaLoading' }`}>
            <section className="View_control">
              <LogoMenu menu={ store.menu } currentLocation={ currentLocation } updateLocation={ ::this.updateLocation } />
            </section>

            <section className="View_media">
              <div className="View_mediaShutter u-top" />
              <div className="View_mediaShutter u-bottom" />
              <div className="View_mediaLoadingMessage">Hello!</div>
              { currentLocation === "home" && <HomeMedia loading={ mediaLoading } stopMediaLoading={ ::this.stopMediaLoading } /> }
            </section>
          </div>;
  }
};
