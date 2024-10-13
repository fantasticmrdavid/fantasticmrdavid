import React from "react";
import { Routes, Route } from "react-router-dom";
import { View } from "components/View/View";
import projectList from "data/projects";
import { ROUTE_PATHS, LOCATIONS } from "routers/constants";
import { Shop } from "views/Shop/Shop";

const Routing = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_PATHS.home}
        element={<View location={LOCATIONS.home} />}
      />
      <Route
        path={ROUTE_PATHS.about}
        element={<View location={LOCATIONS.about} />}
      />
      {projectList.map((p) => (
        <Route
          key={`route_${p.target}`}
          path={`${ROUTE_PATHS.work}/${p.target}`}
          element={<View location={LOCATIONS.work} target={p.target} />}
        />
      ))}
      <Route
        path={ROUTE_PATHS.work}
        element={<View location={LOCATIONS.work} />}
      />
      <Route path={ROUTE_PATHS.shop} element={<Shop />} />
      <Route
        path={ROUTE_PATHS.contact}
        element={<View location={LOCATIONS.contact} />}
      />
    </Routes>
  );
};

export default Routing;
