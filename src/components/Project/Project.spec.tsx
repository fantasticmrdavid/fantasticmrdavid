import React from 'react';
import { render } from "@testing-library/react";
import projects, { ProjectData } from "data/projects";
import { Project } from "components/Project/Project";

projects.map((p: ProjectData, index) => {
  const isLast = index === projects.length - 1;
  const isFirst = index === 0;
  describe(`Component -> Project -> ${p.title}`, () => {
    it('should render the Project UI without throwing an error', () => {
      expect(
        render(
          <Project
            {...p}
            isParentLoading={false}
            key={`Project_${p.target}`}
            nextProject={projects[isLast ? 0 : index + 1]}
            previousProject={projects[isFirst ? projects.length - 1 : index - 1]}
          />
        )
      ).toMatchSnapshot();
    });
  });
})
