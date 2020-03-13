import React from 'react';
import { shallow } from 'enzyme';
import Ui from 'components/Project/ui';
import { Tile } from 'components/Project/styles';
import projects from 'data/projects';

const props = {
  current: undefined,
  parentLoading: false,
  isCurrent: false,
  updateCurrent: jest.fn(),
};

const mockEvent = {
  preventDefault: () => {},
};

projects.map((p) => {
  describe(`Component -> Project -> ${p.title}`, () => {
    it('should render the Project UI (not current) without throwing an error', () => {
      expect(shallow(<Ui {...props} {...p} />)).toMatchSnapshot();
    });

    it('should render the Project UI (current) without throwing an error', () => {
      expect(shallow(<Ui {...props} {...p} isCurrent />)).toMatchSnapshot();
    });

    it('should call updateCurrent() when Tile is clicked', () => {
      const component = shallow(<Ui {...props} {...p} />);
      component.find(Tile).simulate('click', mockEvent);
      expect(props.updateCurrent).toHaveBeenCalled();
    });
  });

  return p;
});
