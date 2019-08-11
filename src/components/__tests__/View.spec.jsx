import React from 'react';
import { shallow } from 'enzyme';
import View from 'components/View/ui';

const props = {
  location: 'about',
  loading: false,
  firstLoad: false,
};

describe('Component -> View', () => {
  it('should render the View without throwing an error', () => {
    expect(shallow(<View {...props} />)).toMatchSnapshot();
  });

  it('should render the View in loading state without throwing an error', () => {
    expect(shallow(<View {...props} loading />)).toMatchSnapshot();
  });

  it('should render the View in first loading state without throwing an error', () => {
    expect(shallow(<View {...props} firstLoad loading />)).toMatchSnapshot();
  });
});
