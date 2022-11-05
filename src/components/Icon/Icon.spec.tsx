import React from 'react';
import { render } from "@testing-library/react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Icon } from 'components/Icon/Icon';

describe('Component -> Icon', () => {
  it('should render the Redbubble icon without throwing an error', () => {
    expect(render(<Icon icon="redbubble" />)).toMatchSnapshot();
  });

  it('should render the Instagram icon without throwing an error', () => {
    expect(render(<Icon icon={FaInstagram} />)).toMatchSnapshot();
  });

  it('should render the Github icon without throwing an error', () => {
    expect(render(<Icon icon={FaGithub} />)).toMatchSnapshot();
  });

  it('should render the LinkedIn icon without throwing an error', () => {
    expect(render(<Icon icon={FaLinkedin} />)).toMatchSnapshot();
  });
});
