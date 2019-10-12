import React from 'react';
import { Switch, Route } from 'react-router';
import View from 'components/View';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <View location="home" />} />
      <Route path="/about" render={() => <View location="about" />} />
      <Route path="/work" render={() => <View location="work" />} />
      <Route path="/contact" render={() => <View location="contact" />} />
    </Switch>
  );
};

export default Routes;
