import React, { PureComponent } from 'react';
import TerminalText from 'components/TerminalText';
import { scrollToElement } from 'helpers/dom';
import SocialLink from './SocialLink';
import socialLinks from './socialLinks';
import * as styles from './styles';

export default class extends PureComponent {
  componentDidMount() {
    scrollToElement('emailLink');
  }

  render() {
    const {
      Container,
      ShutterTop,
      ShutterBottom,
      Content,
      Email,
      Social,
    } = styles;
    return (
      <Container>
        <ShutterTop />
        <ShutterBottom />
        <Content>
          <Email id="emailLink">
            <a href="mailto:fantasticmrdavid@gmail.com"><TerminalText blinker>fantasticmrdavid@gmail.com</TerminalText></a>
          </Email>
          <Social>
            { socialLinks.map(l => {
              return <SocialLink {...l} key={`SocialLink_${l.title}`} />;
            })
            }
          </Social>
        </Content>
      </Container>
    );
  }
}
