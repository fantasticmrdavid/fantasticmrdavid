import React from 'react';
import { render } from 'react-dom';
import Styles from "./styles";

import View from "./components/View";

class App extends React.Component {
  render () {
    return <View />;
  }
}

render(<App/>, document.getElementById('app'));
