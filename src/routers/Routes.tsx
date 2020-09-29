import React from 'react';
import { Switch, Route } from 'react-router';
import View from 'components/View';
import projectList from 'data/projects';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <View location="home" />} />
      <Route path="/about" render={() => <View location="about" />} />
      {
          projectList.map((p) => (
            <Route
              key={`route_${p.target}`}
              path={`/work/${p.target}`}
              render={() => <View location="work" target={p.target} />}
            />
          ))
      }
      <Route path="/work" render={() => <View location="work" />} />
      <Route path="/contact" render={() => <View location="contact" />} />
    </Switch>
  );
};

export default Routes;
