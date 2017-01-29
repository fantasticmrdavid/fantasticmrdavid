import './styles.css';
import React, { Component } from 'react';
import SocialLink from './SocialLink';

export default class ContactMedia extends Component {
  componentDidMount () {
      const { stopMediaLoading } = this.props;
      setTimeout(stopMediaLoading);
  }

  render () {
    const { socialLinks, loading } = this.props;

    return <div className={ `ContactMedia u-${loading && 'loading'}` }>
            <div className="ContactMedia_shutter u-top" />
            <div className="ContactMedia_shutter u-bottom" />
            <div className="ContactMedia_content">
              <div className="ContactMedia_email"><a href="mailto:fantasticmrdavid@gmail.com">fantasticmrdavid@gmail.com</a></div>
              <div className="ContactMedia_social">
                { socialLinks.map( (l, i) => <SocialLink { ...l} key={`SocialLink_${i}`}/> ) }
              </div>
            </div>
          </div>;
  }
}
