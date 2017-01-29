import React from 'react';
import { render } from 'react-dom';
import './styles';
import './helpers';

import { store } from "./store";
import View from "./components/View";

class App extends React.Component {
  render () {
    return <View store={ store }/>;
  }
}

render(<App/>, document.getElementById('app'));
