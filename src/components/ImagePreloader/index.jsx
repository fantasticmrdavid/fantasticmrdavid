import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

export default class ImagePreloader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
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
    const { images } = this.props;
    const { completed } = this.state;
    return images.length === completed;
  }

  render() {
    const { images } = this.props;
    const { completed } = this.state;
    const { Container } = styles;
    return (
      <Container completed={completed === images.length}>
        {completed / images.length * 100}%
      </Container>
    );
  }
}

ImagePreloader.propTypes = {
  images: PropTypes.array.isRequired,
  completedAction: PropTypes.func,
};
