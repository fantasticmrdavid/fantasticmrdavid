import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

export default class SocialLink extends Component {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { title } = this.props;
    ga('send', 'event', 'Social link click', title);
  }

  render() {
    const { title, href, icon, fa } = this.props;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" title={title} onClick={this.boundHandleClick}>
        { !!fa ?
          <i className={`fa fa-${icon}`} />
          : <Icon icon={icon} />
        }
      </a>
    );
  }
}

SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  fa: PropTypes.bool,
};
