import React from 'react';
import { mount } from 'enzyme';
import Ui from 'components/MenuLink/ui';

const props = {
  target: 'contact',
  current: false,
  menuActive: true,
  label: 'Contact',
  updateLocation: jest.fn(),
  history: {
    push: jest.fn(),
  },
};

describe('Component -> MenuLink', () => {
  it('should render the "contact" MenuLink UI without throwing an error', () => {
    expect(mount(<Ui {...props} />)).toMatchSnapshot();
  });

  it('should render the "work" MenuLink UI without throwing an error', () => {
    expect(mount(<Ui {...props} target="work" />)).toMatchSnapshot();
  });

  it('should render the "about" MenuLink UI without throwing an error', () => {
    expect(mount(<Ui {...props} target="about" />)).toMatchSnapshot();
  });
});
