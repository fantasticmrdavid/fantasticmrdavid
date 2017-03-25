import React from 'react';
import Cube from '../../../components/Cube';
import './styles.css';

export default (props) => {
  const { loading } = props;
  return (
    <div className={`AboutMedia u-${loading && 'loading'}`}>
      <div className="AboutMedia_bg">
        <Cube />
      </div>
      <img className="AboutMedia_profile" src="/assets/images/profile.jpg" alt="Me" />
      <div className="AboutMedia_content">
        <p>Hi! I'm David, and I like making things.<br />
        Since I was a kid I've been passionate about building and creating.
        I've always enjoyed the journey of formulating and executing an idea
        to achieve a goal whether it's solving a complex problem, creating some
        ambitious new artwork, or both.</p>

        <h2>Engineer</h2>
        <p>I've been building web projects for over 10 years, starting from
          when I was in high school and needed a simple HTML page to display my
          artwork. I then moved on to become a Full-Stack LAMP Developer
          working on vendor-side and agency projects, and from there to
          Front-End Engineer specialising in HTML5, CSS3, ES6 and React. I
          enjoy learning new languages and technologies to build even more
          scalable and robust applications.</p>

        <h2>Artist</h2>
        <p>Maybe it was the cartoons and comics growing up, but by the time my
          parents realised that the massive time sink of a hobby that was
          drawing wasn't going away, it was too late. While web engineering
          keeps the problem solving part of my brain occupied, illustration and
          artwork have allowed me to stretch my creative boundaries. In my
          after hours I have drawn comics, produced character concepts, made 3D
          prints, and anything else I feel like at the time.</p>

        <h2>About this site</h2>
        fantasticmrdavid.com.au was built with:
        <div className="AboutMedia_siteSpecs">
          <div className="AboutMedia_siteSpecsSection">
            <h3>Environment</h3>
            <ul>
              <li>ES6</li>
              <li>Node.js</li>
              <li>Webpack</li>
            </ul>
          </div>
          <div className="AboutMedia_siteSpecsSection">
            <h3>Architecture</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>PostCSS</li>
            </ul>
          </div>
          <div className="AboutMedia_siteSpecsSection">
            <h3>Deployment</h3>
            <ul>
              <li>Github</li>
              <li>Codeship</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
        <br />
        <a className="u-cta" href="https://github.com/fantasticmrdavid/fantasticmrdavid" target="_blank" rel="noopener noreferrer">
        Visit the Github repository
        </a>
      </div>
    </div>
  );
};
