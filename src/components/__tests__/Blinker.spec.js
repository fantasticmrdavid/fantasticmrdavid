import React from 'react';
import renderer from 'react-test-renderer';
import Blinker from 'components/Blinker';

describe('Component -> Blinker', () => {
  it('should render the Blinker without throwing an error', () => {
    expect(renderer.create(<Blinker />)).toMatchSnapshot();
  });
});
