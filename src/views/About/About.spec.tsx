import React from 'react';
import { render } from "@testing-library/react";
import { About } from 'views/About/About';

describe('View -> About', () => {
  it('should render the About view without throwing an error', () => {
    expect(render(<About />)).toMatchSnapshot();
  });
});
