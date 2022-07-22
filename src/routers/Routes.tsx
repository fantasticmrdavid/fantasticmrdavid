import React from 'react';
import { Switch, Route } from 'react-router';
import View from 'components/View';
import projectList from 'data/projects';
import { ROUTE_PATHS, LOCATIONS } from 'routers/constants';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_PATHS.home} render={() => <View location={LOCATIONS.home} />} />
      <Route path={ROUTE_PATHS.about} render={() => <View location={LOCATIONS.about} />} />
      {
          projectList.map((p) => (
            <Route
              key={`route_${p.target}`}
              path={`${ROUTE_PATHS.work}/${p.target}`}
              render={() => <View location={LOCATIONS.work} target={p.target} />}
            />
          ))
      }
      <Route path={ROUTE_PATHS.work} render={() => <View location={LOCATIONS.work} />} />
      <Route path={ROUTE_PATHS.contact} render={() => <View location={LOCATIONS.contact} />} />
    </Switch>
  );
};

export default Routes;
