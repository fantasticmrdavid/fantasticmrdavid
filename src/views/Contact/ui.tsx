import React from 'react';
import ReactPlayer from 'react-player/lazy';
import TerminalText from 'components/TerminalText';
import { scrollToElement } from 'helpers/dom';
import SocialLink from './SocialLink';
import socialLinks from './socialLinks';
import * as styles from './styles';

const {
  BackgroundVideo,
  Container,
  ShuttersContainer,
  ShutterTop,
  ShutterBottom,
  ContentContainer,
  Content,
  Email,
  Social,
} = styles;

export default () => {
  scrollToElement('emailLink');
  return (
    <Container>
      <BackgroundVideo>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=mGMZ6Rz6olg&t=25s"
          playing
          loop
          volume={1}
          muted
          width="100%"
          height="100%"
        />
      </BackgroundVideo>
      <ShuttersContainer>
        <ShutterTop />
        <ShutterBottom />
      </ShuttersContainer>
      <ContentContainer>
        <Content>
          <Email id="emailLink">
            <a href="mailto:fantasticmrdavid@gmail.com"><TerminalText blinker>fantasticmrdavid@gmail.com</TerminalText></a>
          </Email>
          <Social>
            { socialLinks.map((l) => <SocialLink {...l} key={`SocialLink_${l.title}`} />) }
          </Social>
        </Content>
      </ContentContainer>
    </Container>
  );
};
