import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ImagePreloader extends PureComponent {
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

      return i;
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

ImagePreloader.propTypes = {
  images: PropTypes.array.isRequired,
  completedAction: PropTypes.func,
};
