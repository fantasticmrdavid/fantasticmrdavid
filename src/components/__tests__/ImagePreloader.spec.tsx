import React from 'react';
import { render } from "@testing-library/react";
import ImagePreloader from 'components/ImagePreloader';

const images = [
  '/assets/images/legoFlinders.jpg',
];

const completedAction = jest.fn();

describe('Component -> ImagePreloader', () => {
  it('should render the ImagePreloader without throwing an error', () => {
    expect(render(
      <ImagePreloader images={images} completedAction={completedAction} />,
    )).toMatchSnapshot();
  });

  it('should expect the completedAction to have been called', () => {
    setTimeout(() => expect(completedAction).toBeCalled(), 200);
  });
});
