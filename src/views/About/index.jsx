import React from 'react';
import PropTypes from 'prop-types';
import Cube from 'components/Cube';
import styles from './styles.css';

const AboutMedia = (props) => {
  const { loading } = props;
  return (
    <div className={`${styles.AboutMedia} ${loading && styles.loading}`}>
      <div className={styles.bg}>
        <Cube loading={loading} />
      </div>
      <img className={styles.profile} src="/assets/images/profile.jpg" alt="Me" />
      <div className={styles.content}>
        <p>
          Hi! I'm David, and I like making things.<br />
          Since childhood I've been passionate about building and creating.
          I've always enjoyed the journey of taking an idea from concept and
          making it reality whether it's solving a complex problem, creating some
          ambitious new artwork, or both.
        </p>

        <h2>Engineer</h2>
        <p>
          I've been building web projects for over a decade, starting from
          when I was in high school and needed a simple HTML page to display my
          artwork. From there I moved on to become a Full-Stack LAMP Developer
          working on vendor-side and agency projects, and then to
          lead Front-End and UX Engineer specialising in HTML5, CSS3, ES6 and React. I
          love learning about new technologies to develop better and more effective
          product solutions.
        </p>

        <h2>Artist</h2>
        <p>
          Drawing has been my happy place for as long as I can remember.
          While building web apps keeps the problem solving part of my brain busy,
          illustration and artwork have allowed me to stretch my creative boundaries.
          In my after hours I have drawn comics, exhibited artwork, produced 3D
          prints, and made <a className={styles.link} href="https://www.youtube.com/watch?v=7xk4LmZ6hwc" target="_blank" rel="noopener noreferrer">other random things</a> simply because they were too much fun.
        </p>

        <h2>About this site</h2>
        fantasticmrdavid.com.au was built with:
        <div className={styles.siteSpecs}>
          <div className={styles.siteSpecsSection}>
            <h3>Environment</h3>
            <ul>
              <li>ES6</li>
              <li>Node.js</li>
              <li>Webpack</li>
            </ul>
          </div>
          <div className={styles.siteSpecsSection}>
            <h3>Architecture</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>CSS-Modules</li>
            </ul>
          </div>
          <div className={styles.siteSpecsSection}>
            <h3>Deployment</h3>
            <ul>
              <li>Github</li>
              <li>Codeship</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
        <br />
        <a className="cta" href="https://github.com/fantasticmrdavid/fantasticmrdavid" target="_blank" rel="noopener noreferrer">
        Visit the Github repository
        </a>
      </div>
    </div>
  );
};

AboutMedia.propTypes = {
  loading: PropTypes.bool,
};

export default AboutMedia;
