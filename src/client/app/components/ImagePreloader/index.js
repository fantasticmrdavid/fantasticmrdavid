import React, { Component } from 'react';

export default class ImagePreloader extends Component {
  constructor (props) {
    super(props);

    const { images } = props;

    this.state = {
      count: images.length,
      completed: 0,
    };

    this.loaders = [];
  }

  componentWillMount () {
    const { images, completedAction } = this.props;

    images.map((i) => {
      let image = new Image;

      image.onload = () => {
        let { completed } = this.state;
        this.setState({
          completed: parseInt(completed) + 1,
        });
        this.checkCompleted() && completedAction();
      };
      image.src = i;
      this.loaders.push(image);
    });
  }

  checkCompleted () {
    const { count, completed } = this.state;
    return count === completed;
  }

  render () {
    return null;
  }
}
