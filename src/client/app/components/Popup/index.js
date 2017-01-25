import React, { Component } from 'react';
import './styles.css';

export default class Popup extends Component {
  constructor (props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount () {
    setTimeout( () => { this.setState({ loading: false }) });
  }

  close (e) {
    e.preventDefault();
    let { hideAction } = this.props;

    hideAction();
  }
  render () {
    const { title, url, orientation } = this.props;
    let { loading } = this.state;

    return <div className={`Popup u-${ !!loading && 'loading' }`}>
              <div className="Lightbox" onClick={ ::this.close } />
              <div className="Popup_dialog">
                <div className="Popup_close" onClick={ ::this.close }>X</div>
                { !!url && <img className={ `u-${orientation}` } src={ url } alt={ title } /> }
              </div>
            </div>
  }
}
