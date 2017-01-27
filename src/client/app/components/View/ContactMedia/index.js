import './styles.css';
import React, { Component } from 'react';
import Icon from '../../Icon';

export default class ContactMedia extends Component {
  componentDidMount () {
      const { stopMediaLoading } = this.props;
      setTimeout(stopMediaLoading);
  }

  render () {
    const { loading } = this.props;

    return <div className={ `ContactMedia u-${loading && 'loading'}` }>
            <div className="ContactMedia_shutter u-top" />
            <div className="ContactMedia_shutter u-bottom" />
            <div className="ContactMedia_content">
              <div className="ContactMedia_email"><a href="mailto:fantasticmrdavid@gmail.com">fantasticmrdavid@gmail.com</a></div>
              <div className="ContactMedia_social">
                <a href="https://au.linkedin.com/in/fantasticmrdavid" target="_blank" title="LinkedIn"><i className="fa fa-linkedIn-square"></i></a>
                <a href="https://github.com/fantasticmrdavid/" target="_blank" title="Github"><i className="fa fa-github"></i></a>
                <a href="https://www.redbubble.com/people/misterdavid/" target="_blank" title="Redbubble">
                  <Icon icon="redbubble" />
                </a>
              </div>
            </div>
          </div>;
  }
}
