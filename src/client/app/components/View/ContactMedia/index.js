import './styles.css';
import React, { Component } from 'react';

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
                <a href="https://au.linkedin.com/in/fantasticmrdavid" target="_blank"><i className="fa fa-linkedIn-square"></i></a>
                <a href="https://github.com/fantasticmrdavid/" target="_blank"><i className="fa fa-github"></i></a>
              </div>
            </div>
          </div>;
  }
}
