import React, { Component } from "react";
import Icon from '../../Icon';

export default class SocialLink extends Component {
  handleClick () {
    const { title } = this.props;
    ga('send', 'event', 'Social link click', title);
  }

  render () {
    const { title, href, icon, fa } = this.props;
    return <a href={ href } target="_blank" title={ title } onClick={ ::this.handleClick }>
            { !!fa ?
              <i className={`fa fa-${icon}`}></i>
              : <Icon icon={ icon } />
            }
            </a>;
  }
}
