import React from 'react';
import renderer from 'react-test-renderer';
import Cube from 'components/Cube';

describe('Component -> Cube', () => {
  it('should render the Cube in loading state without throwing an error', () => {
    expect(renderer.create(<Cube loading={true} />)).toMatchSnapshot();
  });

  it('should render the Cube in completed state without throwing an error', () => {
    expect(renderer.create(<Cube loading={false} />)).toMatchSnapshot();
  });
});
