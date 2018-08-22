import React from 'react';
import SocialLink from './SocialLink';
import socialLinks from './socialLinks';
import styles from './styles.css';

export default () => {
  return (
    <div className={styles.ContactMedia}>
      <div className={styles.shutterTop} />
      <div className={styles.shutterBottom} />
      <div className={styles.content}>
        <div className={styles.email}><a href="mailto:fantasticmrdavid@gmail.com">fantasticmrdavid@gmail.com</a></div>
        <div className={styles.social}>
          { socialLinks.map((l) => {
            return <SocialLink {...l} key={`SocialLink_${l.title}`} />;
          })
          }
        </div>
      </div>
    </div>
  );
};
