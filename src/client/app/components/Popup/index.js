import React, { Component } from 'react';
import './styles.css';

export default class Popup extends Component {
  constructor () {
    super();
    this.boundHandleClose = this.handleClose.bind(this);
  }

  handleClose (e) {
    e.preventDefault();

    const { close } = this.props;
    close(e);
  }
  render () {
    const { title, url, orientation, active, loading } = this.props;

    return <div className={`Popup u-${ !!loading && 'loading' } u-${ !!active && 'active' }`}>
              <div className="Lightbox" onClick={ this.boundHandleClose } />
              <div className="Popup_dialog">
                <div className="Popup_close" onClick={ this.boundHandleClose }>X</div>
                { !!url && <img className={ `u-${orientation}` } src={ url } alt={ title } /> }
              </div>
            </div>;
  }
}
