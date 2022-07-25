import React from 'react';
import { render } from "@testing-library/react";
import ScopeSpinner from 'components/ScopeSpinner';

describe('Component -> ScopeSpinner', () => {
  it('should render the ScopeSpinner without throwing an error', () => {
    expect(render(<ScopeSpinner />)).toMatchSnapshot();
  });
});
