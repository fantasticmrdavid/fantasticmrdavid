import React from 'react';
import { render } from "@testing-library/react";
import Ui from 'components/Popup/ui';
import {
  Close,
  Landscape,
  Lightbox,
  Portrait,
} from 'components/Popup/styles';

const props = {
  isActive: true,
  onClose: jest.fn(),
  loading: false,
  orientation: 'landscape',
  title: 'Popup Test',
  url: '/about',
};

describe('Component -> Popup', () => {
  it('should render the closed Popup UI without throwing an error', () => {
    expect(render(<Ui {...props} isActive={false} />)).toMatchSnapshot();
  });

  it('should render the open Popup UI without throwing an error', () => {
    expect(render(<Ui {...props} />)).toMatchSnapshot();
  });

  it('should call close() when Lightbox is clicked', () => {
    const component = render(<Ui {...props} />);
    component.getByTestId("popupLightbox").click();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call close() when Close element is clicked', () => {
    const component = render(<Ui {...props} />);
    component.getByTestId("popupClose").click();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should render a Landscape element if a URL is provided and orientation is landscape', () => {
    const component = render(<Ui {...props} />);
    expect(component.getByTestId("popupImage")).toHaveAttribute("data-orientation", "landscape");
  });

  it('should NOT render a Portrait element if the orientation is landscape', () => {
    const component = render(<Ui {...props} />);
    expect(component.getByTestId("popupImage")).not.toHaveAttribute("data-orientation", "portrait");
  });

  it('should render a Portrait element if a URL is provided and orientation is portrait', () => {
    const component = render(<Ui {...props} orientation="portrait" />);
    expect(component.getByTestId("popupImage")).toHaveAttribute("data-orientation", "portrait");
  });

  it('should NOT render a Landscape element if the orientation is landscape', () => {
    const component = render(<Ui {...props} orientation="portrait" />);
    expect(component.getByTestId("popupImage")).not.toHaveAttribute("data-orientation", "landscape");
  });
});
