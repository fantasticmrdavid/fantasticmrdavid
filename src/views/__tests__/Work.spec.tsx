import React from 'react';
import { render } from "@testing-library/react";
import Ui from 'views/Work/ui';

describe('View -> Work', () => {
  it('should render the Work UI without throwing an error', () => {
    expect(render(
      <Ui />,
    )).toMatchSnapshot();
  });
});
