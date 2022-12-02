import React from 'react';
import { render } from "@testing-library/react";
import { Home } from 'views/Home/Home';

describe('View -> Home', () => {
  it('should render the Home view without throwing an error', () => {
    expect(render(
      <Home isLoading={false} />,
    )).toMatchSnapshot();
  });
});
