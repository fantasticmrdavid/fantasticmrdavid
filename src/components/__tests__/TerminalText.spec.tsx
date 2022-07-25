import React from 'react';
import { render } from "@testing-library/react";
import TerminalText from 'components/TerminalText';

const testString = 'The quick brown fox jumps over the lazy dog...';

const props = {
  blinker: true,
  onComplete: jest.fn(),
  speed: 5,
};

describe('Component -> TerminalText', () => {
  it('should render the TerminalText with a string without throwing an error', () => {
    expect(render(
      <TerminalText {...props}>
        {testString}
      </TerminalText>,
    )).toMatchSnapshot();
  });
});

describe('Component -> TerminalText', () => {
  it('should render the TerminalText with a component without throwing an error', () => {
    expect(render(
      <TerminalText {...props}>
        <div>{testString}</div>
      </TerminalText>,
    )).toMatchSnapshot();
  });
});
