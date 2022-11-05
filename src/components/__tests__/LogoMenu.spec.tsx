import React from 'react';
import { render } from "@testing-library/react";
import { LogoMenu } from 'components/LogoMenu/LogoMenu';

describe('Component -> LogoMenu', () => {
  it('should render the LogoMenu without throwing an error', () => {
    expect(render(<LogoMenu />)).toMatchSnapshot();
  });
});
