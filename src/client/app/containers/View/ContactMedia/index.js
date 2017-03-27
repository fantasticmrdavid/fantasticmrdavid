import React from 'react';
import SocialLink from './SocialLink';
import socialLinks from './socialLinks';
import './styles.css';

export default () => {
  return (
    <div className={'ContactMedia'}>
      <div className="ContactMedia_shutter u-top" />
      <div className="ContactMedia_shutter u-bottom" />
      <div className="ContactMedia_content">
        <div className="ContactMedia_email"><a href="mailto:fantasticmrdavid@gmail.com">fantasticmrdavid@gmail.com</a></div>
        <div className="ContactMedia_social">
          { socialLinks.map((l) => {
            return <SocialLink {...l} key={`SocialLink_${l.title}`} />;
          })
          }
        </div>
      </div>
    </div>
  );
};
