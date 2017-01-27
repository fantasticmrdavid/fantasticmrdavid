import React, { Component } from 'react';
import './styles.css';
import ProjectMedia from './Media';

export default class Content extends Component {
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

            { !!role &&
              <section className="ProjectContent_role">
                <div className="ProjectContent_label">Role</div>
                <div className="ProjectContent_copy">{ role }</div>
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
                <a className="u-cta" href={ url } target="_blank">Visit { title }</a>
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
