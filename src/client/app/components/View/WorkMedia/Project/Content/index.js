import React, { Component } from 'react';
import './styles.css';

export default class Content extends Component {
  render () {
    const { title, target, url, products, technology, description, current, updateCurrent } = this.props;

    return <div className={ `ProjectContent u-${target} u-${ current && 'current'}` }>
            <section className="ProjectContent_products">
              <div className="ProjectContent_label">Products</div>
              <div className="ProjectContent_copy">{ products }</div>
            </section>

            <section className="ProjectContent_technology">
              <div className="ProjectContent_label">Technology</div>
              <div className="ProjectContent_copy">{ technology }</div>
            </section>

            <section className="ProjectContent_description">
              <div className="ProjectContent_label">Description</div>
              <div className="ProjectContent_copy">{ description }</div>
            </section>
            {
              !!url &&
              <div className="ProjectContent_url">
                <a href={ url } target="_blank">Visit { title }</a>
              </div>
            }
          </div>;
  }
}
