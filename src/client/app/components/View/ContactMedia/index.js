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
              fantasticmrdavid@gmail.com
            </div>
          </div>;
  }
}
