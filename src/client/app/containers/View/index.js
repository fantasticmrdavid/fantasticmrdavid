import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { locationUpdated } from '../../actions';
import LogoMenu from './LogoMenu';
import HomeMedia from './HomeMedia';
import AboutMedia from './AboutMedia';
import WorkMedia from './WorkMedia';
import ContactMedia from './ContactMedia';
import Popup from '../Popup';
import './styles.css';

const View = (props) => {
  const { location, loading, firstLoad } = props;
  const firstMediaLoading = loading && firstLoad;
  return (
    <div className={`View u-${firstMediaLoading && 'firstMediaLoading'}`}>
      <Popup />
      <section className="View_control">
        <LogoMenu />
      </section>

      <section className={`View_media u-${location}`}>
        <div className="View_mediaShutter u-top" />
        <div className="View_mediaShutter u-bottom" />
        <div className="View_mediaLoadingMessage">Hello!</div>
        { location === 'home' && <HomeMedia /> }
        { location === 'about' && <AboutMedia loading={loading} /> }
        { location === 'work' && <WorkMedia /> }
        { location === 'contact' && <ContactMedia /> }
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location.current,
    loading: state.loading.media,
    firstLoad: state.loading.firstLoad,
    popup: state.popup,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateLocation: (newLocation) => {
      const { location } = ownProps;
      const updatedLocation = location !== newLocation ? newLocation : 'home';

      dispatch(locationUpdated(updatedLocation));

      ga('send', 'event', 'Top Menu Navigate', updatedLocation);
    },
  };
};

View.propTypes = {
  location: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  firstLoad: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
