import React, { Component } from 'react';
import './styles.css';
import LogoMenu from './LogoMenu';
import HomeMedia from './HomeMedia';
import AboutMedia from './AboutMedia';
import WorkMedia from './WorkMedia';
import ContactMedia from './ContactMedia';
import Popup from '../Popup';

export default class View extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentLocation: "home",
      mediaLoading: true,
      firstLoad: true,
      popup: undefined,
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

  showPopup (obj) {
    this.setState({ popup: obj });
  }

  hidePopup () {
    this.setState({ popup: undefined });
  }

  render () {
    const { store } = this.props;
    const { currentLocation, mediaLoading, firstLoad, popup } = this.state;
    let firstMediaLoading = mediaLoading && firstLoad;

    return <div className={`View u-${ firstMediaLoading && 'firstMediaLoading' }`}>
            <Popup { ...popup } hideAction={ ::this.hidePopup } active={ !!popup }/>
            <section className="View_control">
              <LogoMenu menu={ store.menu } currentLocation={ currentLocation } updateLocation={ ::this.updateLocation } />
            </section>

            <section className={`View_media u-${currentLocation}`}>
              <div className="View_mediaShutter u-top" />
              <div className="View_mediaShutter u-bottom" />
              <div className="View_mediaLoadingMessage">Hello!</div>
              { currentLocation === "home" && <HomeMedia loading={ mediaLoading } stopMediaLoading={ ::this.stopMediaLoading } /> }
              { currentLocation === "about" && <AboutMedia loading={ mediaLoading } stopMediaLoading={ ::this.stopMediaLoading } /> }
              { currentLocation === "work" &&
                <WorkMedia
                  projects={ store.projects }
                  loading={ mediaLoading }
                  stopMediaLoading={ ::this.stopMediaLoading }
                  showPopup={ ::this.showPopup }
                />
              }
              { currentLocation === "contact" && <ContactMedia loading={ mediaLoading } stopMediaLoading={ ::this.stopMediaLoading } /> }
            </section>
          </div>;
  }
};
