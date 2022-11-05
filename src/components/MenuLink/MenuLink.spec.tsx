import React from 'react';
import { render } from "@testing-library/react";
import { MenuLink } from 'components/MenuLink/MenuLink';
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
    expect(render(<MenuLink {...props} />)).toMatchSnapshot();
  });

  it('should render the "work" MenuLink UI without throwing an error', () => {
    expect(render(<MenuLink {...props} target="work" />)).toMatchSnapshot();
  });

  it('should render the "about" MenuLink UI without throwing an error', () => {
    expect(render(<MenuLink {...props} target="about" />)).toMatchSnapshot();
  });
});
