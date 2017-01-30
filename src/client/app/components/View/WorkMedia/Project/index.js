import React, { Component } from 'react';
import './styles.css';
import Content from './Content';

export default class Project extends Component {
  handleTileClick (e) {
    e.preventDefault();

    const { target, updateCurrent } = this.props;
    let newCurrent = this.isCurrent() ? undefined : target;
    updateCurrent(newCurrent);
  }

  isCurrent () {
    const { target, current } = this.props;
    return current === target;
  }

  isOtherCurrent () {
    const { current } = this.props;
    return this.isCurrent() ? false : !!current;
  }

  render () {
    const { title, tagline, target, images, updateCurrent, current } = this.props;

    let bgOffStyle = { backgroundImage: `url(${!!images && images.tileOff})` };
    let bgOnStyle = { backgroundImage: `url(${!!images && images.tileOn})` };

    return <div className={ `Project u-${target} u-${ this.isCurrent() && 'current'} u-${ this.isOtherCurrent() && 'otherCurrent' }` }>
            <a className="ProjectTile" data-target={ target } onClick={ ::this.handleTileClick }>
              <div className="ProjectTile_bg u-off" style={ bgOffStyle }/>
              <div className="ProjectTile_bg u-on" style={ bgOnStyle }/>
              <div className="ProjectTile_content">
                <div className="ProjectTile_title">{ title }</div>
                <div className="ProjectTile_tagline">{ tagline }</div>
              </div>
              <div className="ProjectTile_close">X</div>
            </a>
            <Content { ...this.props } />
          </div>;
  }
}
