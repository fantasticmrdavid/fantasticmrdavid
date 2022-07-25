import React from 'react';
import { render } from "@testing-library/react";
import projects, { Project as ProjectProps } from "data/projects";
import Project from "components/Project";

projects.map((p: ProjectProps, index) => {
  const isLast = index === projects.length - 1;
  const isFirst = index === 0;
  describe(`Component -> Project -> ${p.title}`, () => {
    it('should render the Project UI without throwing an error', () => {
      expect(
        render(
          <Project
            {...p}
            key={`Project_${p.target}`}
            nextProject={projects[isLast ? 0 : index + 1]}
            previousProject={projects[isFirst ? projects.length - 1 : index - 1]}
          />
        )
      ).toMatchSnapshot();
    });
  });
})
