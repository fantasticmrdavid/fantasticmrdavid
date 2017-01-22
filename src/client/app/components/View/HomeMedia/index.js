import './styles.css';
import React, { Component } from 'react';

const HOME_IMAGES = [
  {
    name: "legoFlinders",
    src: "/public/assets/images/legoFlinders.jpg",
  },
];

export default class HomeMedia extends Component {
  constructor (props) {
    super(props);

    this.state = {
      image: "",
    }
  }

  componentWillMount () {
    let image = HOME_IMAGES[Math.floor(Math.random() * HOME_IMAGES.length)];
    this.setState({ image: image });
  }

  componentDidMount () {
    const { stopMediaLoading } = this.props;
    const { image } = this.state;
    let bg = new Image;
    bg.src = image.src;
    bg.onload = () => {
      stopMediaLoading();
    };
  }

  render () {
    const { loading } = this.props;
    const { image } = this.state;
    let bgStyle = { backgroundImage: `url(${image.src})` };
    return <div className={ `HomeMedia u-${loading && 'loading'}` } style={ bgStyle } />
  }
}
