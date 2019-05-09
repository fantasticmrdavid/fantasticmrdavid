import React from 'react';
import PropTypes from 'prop-types';
import Cube from 'components/Cube';
import * as styles from './styles';

const AboutMedia = ({ loading }) => {
  const {
    Container,
    Bg,
    ProfilePhoto,
    Content,
    SleeperLink,
    SiteSpecs,
    SpecsSection,
  } = styles;
  return (
    <Container loading={loading}>
      <Bg><Cube loading={loading} /></Bg>
      <ProfilePhoto src="/assets/images/profile.jpg" alt="Me" />
      <Content>
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
          prints, and made <SleeperLink href="https://www.youtube.com/watch?v=7xk4LmZ6hwc" target="_blank" rel="noopener noreferrer">other random things</SleeperLink> simply because they were too much fun.
        </p>

        <h2>About this site</h2>
        fantasticmrdavid.com.au was built with:
        <SiteSpecs>
          <SpecsSection>
            <h3>Environment</h3>
            <ul>
              <li>ES6</li>
              <li>Node.js</li>
              <li>Webpack</li>
            </ul>
          </SpecsSection>
          <SpecsSection>
            <h3>Architecture</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>CSS-Modules</li>
            </ul>
          </SpecsSection>
          <SpecsSection>
            <h3>Testing/QA</h3>
            <ul>
              <li>ESLint</li>
              <li>Jest</li>
            </ul>
          </SpecsSection>
          <SpecsSection>
            <h3>Deployment</h3>
            <ul>
              <li>Github</li>
              <li>Codeship</li>
              <li>AWS</li>
            </ul>
          </SpecsSection>
        </SiteSpecs>
        <p>Disable JavaScript to enable the noscript version!</p>
        <a className="cta" href="https://github.com/fantasticmrdavid/fantasticmrdavid" target="_blank" rel="noopener noreferrer">
        Visit the Github repository
        </a>
      </Content>
    </Container>
  );
};

AboutMedia.propTypes = {
  loading: PropTypes.bool,
};

export default AboutMedia;
