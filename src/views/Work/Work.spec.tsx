import React from 'react';
import { render } from "@testing-library/react";
import { Work } from 'views/Work/Work';

describe('View -> Work', () => {
  it('should render the Work UI without throwing an error', () => {
    expect(render(
      <Work />,
    )).toMatchSnapshot();
  });
});
