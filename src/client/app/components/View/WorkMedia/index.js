import React, { Component } from 'react';
import './styles.css';
import Project from './Project';

export default class WorkMedia extends Component {
  constructor (props) {
    super(props);

    this.state = {
      current: undefined,
    };
  }

  componentDidMount () {
      const { stopMediaLoading } = this.props;
      setTimeout(stopMediaLoading);
  }

  updateCurrent (newCurrent) {
    this.setState({ current: newCurrent });
  }

  render () {
    let { current } = this.state;
    const { projects, loading } = this.props;

    return <div className={ `WorkMedia u-${loading && 'loading'}` }>
            { projects.map((p, i) => {
              return <Project
                        { ...p }
                        key={`Project_${i}`}
                        updateCurrent={ ::this.updateCurrent }
                        current={ current }/> }
                      )
            }
          </div>;
  }
}
