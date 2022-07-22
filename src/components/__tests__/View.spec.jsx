import React from 'react';
import { shallow } from 'enzyme';
import View from 'components/View/ui';
import { LOCATIONS } from 'routers/Routes';

const props = {
  location: LOCATIONS.about,
};

describe('Component -> View', () => {
  it('should render the View without throwing an error', () => {
    expect(shallow(<View {...props} />)).toMatchSnapshot();
  });
});
