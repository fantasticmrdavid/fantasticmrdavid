import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { isMobileOnly } from 'react-device-detect';
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

const videoList = [
  'https://youtu.be/-UPxh7KJPHM?t=30', // Arkanoid
  'https://youtu.be/p3rWb9eso0g?t=52', // Canabalt
  'https://youtu.be/mGMZ6Rz6olg?t=25', // Raiden
  'https://youtu.be/SoUGqhPQFI0?t=80', // Virtual On
  'https://youtu.be/oD9MarvOz1U?t=60', // Battletoads
];

export default () => {
  scrollToElement('emailLink');
  return (
    <Container>
      {
        !isMobileOnly && (
          <BackgroundVideo>
            <ReactPlayer
              url={videoList[Math.floor(Math.random() * videoList.length)]}
              playing
              loop
              volume={1}
              muted
              width="100%"
              height="100%"
            />
          </BackgroundVideo>
        )
      }
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
