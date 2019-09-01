import React from 'react';
import { mount } from 'enzyme';
import Client from 'routers/Client';

describe('Router -> Client', () => {
  it('should render the Client without throwing an error', () => {
    expect(mount(<Client />)).toMatchSnapshot();
  });
});
