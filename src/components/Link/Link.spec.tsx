import React from 'react';
import { render } from "@testing-library/react";
import { Link } from 'components/Link/Link';

describe('Component -> Link', () => {
  it('should render the Link without throwing an error', () => {
    expect(render(<Link href="/" />)).toMatchSnapshot();
  });
});
