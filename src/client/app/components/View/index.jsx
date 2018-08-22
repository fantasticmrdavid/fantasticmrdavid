import React from 'react';
import PropTypes from 'prop-types';
import PopupContainer from 'containers/PopupContainer';
import LogoMenuContainer from 'containers/LogoMenuContainer';
import Home from 'views/Home';
import About from 'views/About';
import Work from 'views/Work';
import Contact from 'views/Contact';
import styles from './styles.css';

const View = ({ location, loading, firstLoad }) => {
  const firstMediaLoading = loading && firstLoad;
  return (
    <div className={`${styles.View} ${firstMediaLoading && styles.firstMediaLoading}`}>
      <PopupContainer />
      <section className={styles.control}>
        <LogoMenuContainer />
      </section>

      <section className={`${styles.media} ${styles[location]}`}>
        <div className={styles.mediaShutterTop} />
        <div className={styles.mediaShutterBottom} />
        <div className={styles.mediaLoadingMessage}>Hello!</div>
        { location === 'home' && <Home /> }
        { location === 'about' && <About loading={loading} /> }
        { location === 'work' && <Work /> }
        { location === 'contact' && <Contact /> }
      </section>
    </div>
  );
};

View.propTypes = {
  location: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  firstLoad: PropTypes.bool,
};

export default View;
