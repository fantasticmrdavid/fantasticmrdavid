import React from 'react';
import { render } from 'react-dom';
import Styles from "./styles";

import { store } from "./store";
import View from "./components/View";

class App extends React.Component {
  render () {
    return <View store={ store }/>;
  }
}

render(<App/>, document.getElementById('app'));
