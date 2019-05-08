import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import styles from './styles.css';

export default class SocialLink extends PureComponent {
  constructor() {
    super();
    this.boundHandleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { title } = this.props;
    ga('send', 'event', 'Social link click', title);
  }

  render() {
    const { title, href, icon } = this.props;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" title={title} onClick={this.boundHandleClick}>
        <Icon className={styles.icon} icon={icon} />
      </a>
    );
  }
}

SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};
