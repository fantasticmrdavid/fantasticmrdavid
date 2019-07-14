import React from 'react';
import renderer from 'react-test-renderer';
import Link from 'components/Link';

describe('Component -> Link', () => {
  it('should render the Link without throwing an error', () => {
    expect(renderer.create(<Link href="/" />)).toMatchSnapshot();
  });
});
