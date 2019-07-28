import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from 'components/Spinner';

describe('Component -> Spinner', () => {
  it('should render the Spinner without throwing an error', () => {
    expect(renderer.create(<Spinner />)).toMatchSnapshot();
  });
});
