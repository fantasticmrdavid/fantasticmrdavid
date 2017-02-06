import './styles.css';
import React, { Component } from 'react';

const HOME_IMAGES = [
  {
    name: "legoFlinders",
    src: "/public/assets/images/legoFlinders.jpg",
  },
];

export default class HomeMedia extends Component {
  componentWillMount () {
    const { updateImage } = this.props;
    let image = HOME_IMAGES[Math.floor(Math.random() * HOME_IMAGES.length)];
    updateImage(image);
  }

  componentDidMount () {
    const { image, stopLoading } = this.props;
    let bg = new Image;
    bg.onload = () => {
      stopLoading();
    };
    bg.src = image.src;
  }

  render () {
    const { loading, image } = this.props;
    let bgStyle = { backgroundImage: `url(${image.src})` };
    return <div className={ `HomeMedia u-${loading && 'loading'}` } style={ bgStyle } />
  }
}
