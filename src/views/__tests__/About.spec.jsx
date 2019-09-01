import React from 'react';
import { mount } from 'enzyme';
import About from 'views/About';

describe('View -> About', () => {
  it('should render the About view (loading) without throwing an error', () => {
    expect(mount(<About loading />)).toMatchSnapshot();
  });

  it('should render the About view (not loading) without throwing an error', () => {
    expect(mount(<About />)).toMatchSnapshot();
  });
});
