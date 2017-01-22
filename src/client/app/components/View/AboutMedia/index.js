import './styles.css';
import React, { Component } from 'react';
import Cube from '../../Cube';

export default class AboutMedia extends Component {
  componentDidMount () {
      const { stopMediaLoading } = this.props;
      setTimeout(stopMediaLoading);
  }

  render () {
    const { loading } = this.props;
    return <div className={ `AboutMedia u-${loading && 'loading'}` }>
            <div className="AboutMedia_bg">
              <Cube />
            </div>
            <div className="AboutMedia_content">
              <p>Vexillologist cronut beard portland taxidermy, lo-fi crucifix photo booth poutine next level swag mumblecore tousled pop-up quinoa. Etsy street art keffiyeh quinoa marfa drinking vinegar, literally knausgaard synth chartreuse unicorn venmo everyday carry small batch. Yuccie banh mi keffiyeh, cronut messenger bag hoodie raw denim organic flannel. 90's listicle forage, hexagon skateboard locavore freegan selfies paleo bespoke poutine DIY 8-bit sustainable. Tumblr squid sartorial locavore.</p>
              <p>Vexillologist cronut beard portland taxidermy, lo-fi crucifix photo booth poutine next level swag mumblecore tousled pop-up quinoa. Etsy street art keffiyeh quinoa marfa drinking vinegar, literally knausgaard synth chartreuse unicorn venmo everyday carry small batch. Yuccie banh mi keffiyeh, cronut messenger bag hoodie raw denim organic flannel. 90's listicle forage, hexagon skateboard locavore freegan selfies paleo bespoke poutine DIY 8-bit sustainable. Tumblr squid sartorial locavore. Hexagon typewriter slow-carb authentic, sustainable tote bag bespoke aesthetic YOLO salvia polaroid vinyl. Wayfarers hammock poke distillery next level roof party</p>
            </div>
            <img className="AboutMedia_profile" src="/public/assets/images/profile.jpg" alt="Me" />
          </div>
  }
}
