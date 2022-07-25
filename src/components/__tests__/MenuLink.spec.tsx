import React from 'react';
import { render } from "@testing-library/react";
import Ui from 'components/MenuLink/ui';
import { LOCATIONS } from 'routers/constants';

const props = {
  target: LOCATIONS.contact,
  isCurrent: false,
  isMenuActive: true,
  label: 'Contact',
  history: {
    push: jest.fn(),
  },
};

describe('Component -> MenuLink', () => {
  it('should render the "contact" MenuLink UI without throwing an error', () => {
    expect(render(<Ui {...props} />)).toMatchSnapshot();
  });

  it('should render the "work" MenuLink UI without throwing an error', () => {
    expect(render(<Ui {...props} target="work" />)).toMatchSnapshot();
  });

  it('should render the "about" MenuLink UI without throwing an error', () => {
    expect(render(<Ui {...props} target="about" />)).toMatchSnapshot();
  });
});
