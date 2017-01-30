import React, { Component } from 'react';
import './styles.css';
import ProjectMedia from './Media';

export default class Content extends Component {
  handleUrlClick () {
    const { title } = this.props;
    ga('send', 'event', 'Project URL Click', title);
  }

  render () {
    const { title,
            target,
            url,
            products,
            role,
            technologies,
            description,
            media,
            current,
            updateCurrent,
            showPopup } = this.props;

    return <div className={ `ProjectContent u-${target} u-${ current && 'current'}` }>
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
              <div className="ProjectContent_copy">{ description }</div>
            </section>
            {
              !!url &&
              <div className="ProjectContent_url">
                <a className="u-cta" href={ url } target="_blank" onClick={ ::this.handleUrlClick }>Visit { title }</a>
              </div>
            }
            <div className="ProjectContent_mediaWrapper">
              {
                !!media && media.map( (m, i) => { return <ProjectMedia {...m} showPopup={ showPopup } key={ `ProjectMedia_${i}` } /> } )
              }
            </div>
          </div>;
  }
}
