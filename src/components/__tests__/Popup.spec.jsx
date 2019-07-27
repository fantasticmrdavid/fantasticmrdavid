import React from 'react';
import { mount } from 'enzyme';
import Ui from 'components/Popup/ui';
import {
  Close,
  Landscape,
  Lightbox,
  Portrait,
} from 'components/Popup/styles';

const props = {
  active: true,
  close: jest.fn(),
  loading: false,
  orientation: 'landscape',
  title: 'Popup Test',
  url: '/about',
};

describe('Component -> Popup', () => {
  it('should render the loading Popup UI without throwing an error', () => {
    expect(mount(<Ui {...props} loading />)).toMatchSnapshot();
  });

  it('should render the closed Popup UI without throwing an error', () => {
    expect(mount(<Ui {...props} active={false} />)).toMatchSnapshot();
  });

  it('should render the open Popup UI without throwing an error', () => {
    expect(mount(<Ui {...props} />)).toMatchSnapshot();
  });

  it('should call close() when Lightbox is clicked', () => {
    const component = mount(<Ui {...props} />);
    component.find(Lightbox).simulate('click');
    expect(props.close).toHaveBeenCalled();
  });

  it('should call close() when Close element is clicked', () => {
    const component = mount(<Ui {...props} />);
    component.find(Close).simulate('click');
    expect(props.close).toHaveBeenCalled();
  });

  it('should render a Landscape element if a URL is provided and orientation is landscape', () => {
    const component = mount(<Ui {...props} />);
    expect(component.find(Landscape)).toHaveLength(1);
  });

  it('should NOT render a Portrait element if the orientation is landscape', () => {
    const component = mount(<Ui {...props} />);
    expect(component.find(Portrait)).toHaveLength(0);
  });

  it('should render a Portrait element if a URL is provided and orientation is portrait', () => {
    const component = mount(<Ui {...props} orientation="portrait" />);
    expect(component.find(Portrait)).toHaveLength(1);
  });

  it('should NOT render a Landscape element if the orientation is landscape', () => {
    const component = mount(<Ui {...props} orientation="portrait" />);
    expect(component.find(Landscape)).toHaveLength(0);
  });
});
