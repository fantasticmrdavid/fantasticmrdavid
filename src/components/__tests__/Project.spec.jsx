import React from 'react';
import { shallow } from 'enzyme';
import Ui from 'components/Project/ui';
import projects from 'data/projects';

const props = {
  current: undefined,
  isCurrent: false,
};

projects.map((p) => {
  describe(`Component -> Project -> ${p.title}`, () => {
    it('should render the Project UI without throwing an error', () => {
      expect(shallow(<Ui {...props} {...p} />)).toMatchSnapshot();
    });
  });

  return p;
});
