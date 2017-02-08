import React, { Component } from 'react';
import './styles.css';
import LogoMenuContainer from '../../containers/LogoMenu';
import HomeMediaContainer from '../../containers/HomeMedia';
import AboutMedia from './AboutMedia';
import WorkMediaContainer from '../../containers/WorkMedia';
import ContactMedia from './ContactMedia';
import PopupContainer from '../../containers/Popup';

export default class View extends Component {
  render () {
    const { currentLocation, loading, firstLoad } = this.props;
    let firstMediaLoading = loading && firstLoad;

    return <div className={`View u-${ firstMediaLoading && 'firstMediaLoading' }`}>
            <PopupContainer />
            <section className="View_control">
              <LogoMenuContainer />
            </section>

            <section className={`View_media u-${currentLocation}`}>
              <div className="View_mediaShutter u-top" />
              <div className="View_mediaShutter u-bottom" />
              <div className="View_mediaLoadingMessage">Hello!</div>
              { currentLocation === "home" && <HomeMediaContainer /> }
              { currentLocation === "about" && <AboutMedia loading={ loading } /> }
              { currentLocation === "work" && <WorkMediaContainer /> }
              { currentLocation === "contact" && <ContactMedia /> }
            </section>
          </div>;
  }
};
