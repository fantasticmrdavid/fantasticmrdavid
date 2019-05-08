import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProjectMediaContainer from 'containers/ProjectMediaContainer';
import styles from './styles.css';

export default class Content extends PureComponent {
  constructor() {
    super();
    this.boundHandleUrlClick = this.handleUrlClick.bind(this);
  }

  handleUrlClick() {
    const { title } = this.props;
    ga('send', 'event', 'Project URL Click', title);
  }

  render() {
    const { title,
            target,
            url,
            products,
            technologies,
            description,
            media,
            isCurrent,
            showPopup } = this.props;

    const descriptionMarkup = { __html: description };

    return (
      <div className={`${styles.ProjectContent} ${styles[target]} ${!!isCurrent && styles.current}`}>
        { !!products &&
          <section className={styles.products}>
            <div className={styles.label}>Products</div>
            <div className={styles.copy}>{ products }</div>
          </section>
        }

        <section className={styles.technologies}>
          <div className={styles.label}>Technologies</div>
          <div className={styles.copy}>{ technologies }</div>
        </section>

        <section className={styles.description}>
          <div className={styles.label}>Description</div>
          <div className={styles.copy} dangerouslySetInnerHTML={descriptionMarkup} />
        </section>
        {
          !!url &&
          <div className={styles.url}>
            <a className="cta" href={url} target="_blank" rel="noopener noreferrer" onClick={this.boundHandleUrlClick}>Visit { title }</a>
          </div>
        }
        <div className={styles.mediaWrapper}>
          {
            !!media && media.map(m => <ProjectMediaContainer {...m} showPopup={showPopup} noSiblings={media.length === 1} key={`ProjectMedia_${m.slug}`} />)
          }
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  showPopup: PropTypes.func,
  isCurrent: PropTypes.bool,
  title: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  url: PropTypes.string,
  products: PropTypes.string,
  technologies: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  media: PropTypes.array,
};
