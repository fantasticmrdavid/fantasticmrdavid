import React from 'react';
import { render } from "@testing-library/react";
import Ui from 'components/LogoMenu/ui';

describe('Component -> LogoMenu', () => {
  it('should render the LogoMenu UI without throwing an error', () => {
    expect(render(<Ui />)).toMatchSnapshot();
  });
});
