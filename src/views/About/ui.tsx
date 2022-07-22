import React, { memo, useContext } from 'react';
import Cube from 'components/Cube';
import Link from 'components/Link';
import { LoadingContext } from 'contexts/Loading';
import {
  Container,
  Bg,
  ProfilePhoto,
  Content,
  SleeperLink,
  SiteSpecs,
  SpecsSection,
} from './styles';

export default memo(
  () => {
    const { getIsLoading } = useContext(LoadingContext);
    const isLoading = getIsLoading();
    return (
      <Container isLoading={isLoading}>
        <Bg><Cube isLoading={isLoading} /></Bg>
        <ProfilePhoto src="/assets/images/profile.jpg" alt="Me" />
        <Content>
          <p>
            Hi! I'm David, and I like making things.
            <br /><br />
            Since I was a kid I've been passionate about building and creating.
            I've always enjoyed the journey of taking an idea from concept and
            making it reality.
            <br /><br />
            I firmly believe that by empowering people with problem solving technology
            and empathy we can build a better world together.
          </p>

          <h2>Engineer</h2>
          <p>
            I've been building web projects for over a decade, starting from
            when I was in high school and needed a simple HTML page to display my
            artwork. From there my journey has taken me to Full-Stack LAMP Development
            working on vendor-side and agency projects alike, and then to leading
            Front-End and UX Engineering specialising in HTML5, CSS3, ES6 JavaScript and React.
            I love learning about new technologies to develop better and more effective
            ways to solve problems and get things done.
          </p>

          <h2>Artist</h2>
          <p>
            Drawing has been my happy place for as long as I can remember.
            While building software keeps the puzzle solving part of my brain busy,
            illustration, artwork, and tinkering have allowed me to stretch my creative boundaries.
            In my downtime I've drawn comics, exhibited artwork, designed and produced 3D
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
                <li>Styled-Components</li>
              </ul>
            </SpecsSection>
            <SpecsSection>
              <h3>Testing/QA</h3>
              <ul>
                <li>TypeScript</li>
                <li>ESLint</li>
                <li>Jest</li>
                <li>Enzyme</li>
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
          <Link href="https://github.com/fantasticmrdavid/fantasticmrdavid" target="_blank" rel="noopener noreferrer">
            Visit the Github repository
          </Link>
        </Content>
      </Container>
    );
  },
);
