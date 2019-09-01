import React from 'react';
import { mount } from 'enzyme';
import Contact from 'views/Contact';

describe('View -> Contact', () => {
  it('should render the Contact view without throwing an error', () => {
    expect(mount(<Contact />)).toMatchSnapshot();
  });
});
