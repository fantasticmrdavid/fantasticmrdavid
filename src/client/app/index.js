import React from 'react';
import { render } from 'react-dom';

import Styles from "./styles";
import SplashLogo from "./components/SplashLogo";

class App extends React.Component {
  render () {
    return <SplashLogo />;
  }
}

render(<App/>, document.getElementById('app'));
