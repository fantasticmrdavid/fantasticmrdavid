import React from 'react';
import renderer from 'react-test-renderer';
import ScopeSpinner from 'components/ScopeSpinner';

describe('Component -> ScopeSpinner', () => {
  it('should render the ScopeSpinner without throwing an error', () => {
    expect(renderer.create(<ScopeSpinner />)).toMatchSnapshot();
  });
});
