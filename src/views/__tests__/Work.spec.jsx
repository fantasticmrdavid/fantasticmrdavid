import React from 'react';
import { mount } from 'enzyme';
import Ui from 'views/Work/ui';

describe('View -> Work', () => {
  it('should render the Work UI (loading) without throwing an error', () => {
    const props = {
      startImagesLoading: jest.fn(),
      stopLoading: jest.fn(),
      loading: true,
    };
    expect(mount(
      <Ui {...props} />,
    )).toMatchSnapshot();
  });

  it('should render the Work UI (not loading) without throwing an error', () => {
    const props = {
      startImagesLoading: jest.fn(),
      stopLoading: jest.fn(),
      loading: false,
    };
    expect(mount(
      <Ui {...props} />,
    )).toMatchSnapshot();
  });
});
