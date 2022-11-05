import React from 'react';
import { render } from "@testing-library/react";
import { View } from 'components/View/View';
import { LOCATIONS } from 'routers/constants';

const props = {
  location: LOCATIONS.about,
};

describe('Component -> View', () => {
  it('should render the View without throwing an error', () => {
    expect(render(<View {...props} />)).toMatchSnapshot();
  });
});
