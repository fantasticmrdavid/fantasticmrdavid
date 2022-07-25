import React from 'react';
import { render } from "@testing-library/react";
import Contact from 'views/Contact';

jest.mock('react-player/lazy', () => jest.fn());

describe('View -> Contact', () => {
  it('should render the Contact view without throwing an error', () => {
    expect(render(<Contact />)).toMatchSnapshot();
  });
});
