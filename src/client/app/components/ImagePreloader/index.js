import { Component } from 'react';

export default class ImagePreloader extends Component {
  constructor(props) {
    super(props);

    const { images } = props;

    this.state = {
      count: images.length,
      completed: 0,
    };

    this.loaders = [];
  }

  componentWillMount() {
    const { images, completedAction } = this.props;

    images.map((i) => {
      const image = new Image();

      image.onload = () => {
        const { completed } = this.state;
        this.setState({
          completed: parseInt(completed, 10) + 1,
        });
        if (this.checkCompleted()) completedAction();
      };
      image.src = i;
      this.loaders.push(image);
    });
  }

  checkCompleted() {
    const { count, completed } = this.state;
    return count === completed;
  }

  render() {
    return null;
  }
}
