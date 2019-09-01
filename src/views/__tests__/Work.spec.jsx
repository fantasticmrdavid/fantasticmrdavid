import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { mount } from 'enzyme';
import Initializer from 'routers/Initializer';
import Work from 'views/Work';
import Ui from 'views/Work/ui';

describe('View -> Work', () => {
  it('should render the Work view with Initializer without throwing an error', () => {
    expect(mount(
      <Provider store={store}>
        <Initializer />
        <Work />
      </Provider>,
    )).toMatchSnapshot();
  });

  it('should render the Work UI (loading) without throwing an error', () => {
    const props = {
      startImagesLoading: jest.fn(),
      stopLoading: jest.fn(),
      loading: true,
    };
    expect(mount(
      <Provider store={store}>
        <Ui {...props} />
      </Provider>,
    )).toMatchSnapshot();
  });

  it('should render the Work UI (not loading) without throwing an error', () => {
    const props = {
      startImagesLoading: jest.fn(),
      stopLoading: jest.fn(),
      loading: false,
    };
    expect(mount(
      <Provider store={store}>
        <Ui {...props} />
      </Provider>,
    )).toMatchSnapshot();
  });
});
