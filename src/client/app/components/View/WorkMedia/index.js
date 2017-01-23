import React, { Component } from 'react';
import './styles.css';
import Project from './Project';

export default class WorkMedia extends Component {
  componentDidMount () {
      const { stopMediaLoading } = this.props;
      setTimeout(stopMediaLoading);
  }

  render () {
    const { projects, loading } = this.props;

    return <div className={ `WorkMedia u-${loading && 'loading'}` }>
            { projects.map((p) => { return <Project { ...p } /> })}
          </div>;
  }
}
