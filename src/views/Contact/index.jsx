import React, { PureComponent } from 'react';
import TerminalText from 'components/TerminalText';
import { scrollToElement } from 'helpers/dom';
import SocialLink from './SocialLink';
import socialLinks from './socialLinks';
import styles from './styles.css';

export default class extends PureComponent {
  componentDidMount() {
    scrollToElement('emailLink');
  }

  render() {
    return (
      <div className={styles.ContactMedia}>
        <div className={styles.shutterTop} />
        <div className={styles.shutterBottom} />
        <div className={styles.content}>
          <div className={styles.email} id="emailLink"><a href="mailto:fantasticmrdavid@gmail.com"><TerminalText blinker>fantasticmrdavid@gmail.com</TerminalText></a></div>
          <div className={styles.social}>
            { socialLinks.map((l) => {
              return <SocialLink {...l} key={`SocialLink_${l.title}`} />;
            })
            }
          </div>
        </div>
      </div>
    );
  }
}
