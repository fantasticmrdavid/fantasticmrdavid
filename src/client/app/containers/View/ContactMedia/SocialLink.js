import React, { Component } from "react";
import Icon from '../../../components/Icon';

export default class SocialLink extends Component {
  constructor () {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const { title } = this.props;
    ga('send', 'event', 'Social link click', title);
  }

  render () {
    const { title, href, icon, fa } = this.props;
    return <a href={ href } target="_blank" title={ title } onClick={ this.boundHandleClick }>
            { !!fa ?
              <i className={`fa fa-${icon}`}></i>
              : <Icon icon={ icon } />
            }
            </a>;
  }
}
