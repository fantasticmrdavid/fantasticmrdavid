import React from 'react';
import { render } from "@testing-library/react";
import { ProjectMedia } from 'components/ProjectMedia/ProjectMedia';
import projects from 'data/projects';

projects.map((p) => {
  if (p.media) {
    describe(`Component -> ProjectMedia -> ${p.title}`, () => {
      p.media.map((m) => {
        it(`should render the ProjectMedia UI (src: "${m.thumbnail}") without throwing an error`, () => {
          expect(render(<ProjectMedia orientation={"landscape"} noSiblings={false} platform={"desktop"} {...m} />)).toMatchSnapshot();
        });

        return m;
      });
    });
  }

  return p;
});
