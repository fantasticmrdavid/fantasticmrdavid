import React from 'react';
import { render } from "@testing-library/react";
import Cube from 'components/Cube';

describe('Component -> Cube', () => {
  it('should render the Cube in loading state without throwing an error', () => {
    expect(render(<Cube isLoading />)).toMatchSnapshot();
  });

  it('should render the Cube in completed state without throwing an error', () => {
    expect(render(<Cube isLoading={false} />)).toMatchSnapshot();
  });
});
