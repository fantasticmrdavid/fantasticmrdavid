import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { mount } from 'enzyme';
import Initializer from 'routers/Initializer';
import Home from 'views/Home';
import Ui from 'views/Home/ui';

describe('View -> Home', () => {
  it('should render the Home view with Initializer without throwing an error', () => {
    expect(mount(
      <Provider store={store}>
        <Initializer />
        <Home />
      </Provider>,
    )).toMatchSnapshot();
  });

  it('should render the Home UI (loading) without throwing an error', () => {
    const props = {
      image: {
        name: 'test',
        src: 'testImage/url.jpg',
      },
      loading: true,
      updateImage: jest.fn(),
    };
    expect(mount(<Ui {...props} />)).toMatchSnapshot();
  });

  it('should render the Home UI (not loading) without throwing an error', () => {
    const props = {
      image: {
        name: 'test',
        src: 'testImage/url.jpg',
      },
      loading: false,
      updateImage: jest.fn(),
    };
    expect(mount(<Ui {...props} />)).toMatchSnapshot();
  });
});
