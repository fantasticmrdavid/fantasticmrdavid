import React from 'react';
import { shallow } from 'enzyme';
import Ui from 'components/LogoMenu/ui';

const toggleActive = jest.fn();

describe('Component -> LogoMenu', () => {
  it('should render the LogoMenu UI without throwing an error', () => {
    expect(shallow(<Ui toggleActive={toggleActive} />)).toMatchSnapshot();
  });
});
