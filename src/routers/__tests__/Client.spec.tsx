import React from 'react';
import { render } from "@testing-library/react";
import Client from 'routers/Client';

describe('Router -> Client', () => {
  it('should render the Client without throwing an error', () => {
    expect(render(<Client />)).toMatchSnapshot();
  });
});
