import React, { Component, PropTypes } from 'react';
import './styles.css';
import ProjectMedia from './Media';

export default class Content extends Component {
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
      <div className={`ProjectContent u-${target} u-${!!isCurrent && 'current'}`}>
        { !!products &&
          <section className="ProjectContent_products">
            <div className="ProjectContent_label">Products</div>
            <div className="ProjectContent_copy">{ products }</div>
          </section>
        }

        <section className="ProjectContent_technologies">
          <div className="ProjectContent_label">Technologies</div>
          <div className="ProjectContent_copy">{ technologies }</div>
        </section>

        <section className="ProjectContent_description">
          <div className="ProjectContent_label">Description</div>
          <div className="ProjectContent_copy" dangerouslySetInnerHTML={descriptionMarkup} />
        </section>
        {
          !!url &&
          <div className="ProjectContent_url">
            <a className="u-cta" href={url} target="_blank" rel="noopener noreferrer" onClick={this.boundHandleUrlClick}>Visit { title }</a>
          </div>
        }
        <div className="ProjectContent_mediaWrapper">
          {
            !!media && media.map((m) => { return <ProjectMedia {...m} showPopup={showPopup} key={`ProjectMedia_${m.slug}`} />; })
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
