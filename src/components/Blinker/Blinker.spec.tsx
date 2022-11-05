import React from 'react';
import { render } from "@testing-library/react";
import { Blinker } from 'components/Blinker/Blinker';

describe('Component -> Blinker', () => {
  it('should render the Blinker without throwing an error', () => {
    expect(render(<Blinker />)).toMatchSnapshot();
  });
});
