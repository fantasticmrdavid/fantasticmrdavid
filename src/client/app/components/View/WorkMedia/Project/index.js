import React, { Component } from 'react';
import './styles.css';

export default class Project extends Component {
  render () {
    const { title, target, images, url, products, technology, description } = this.props;
    let bgOffStyle = { backgroundImage: `url(${images.tileOff})` };
    let bgOnStyle = { backgroundImage: `url(${images.tileOn})` };

    return <div className={ `Project u-${target}` }>
            <a className="ProjectTile" data-target={ target }>
              <div className="ProjectTile_bg u-off" style={ bgOffStyle }/>
              <div className="ProjectTile_bg u-on" style={ bgOnStyle }/>
              <div className="ProjectTile_title">{ title }</div>
            </a>
          </div>;
  }
}
