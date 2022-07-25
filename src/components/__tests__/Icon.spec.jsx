import React from 'react';
import renderer from 'react-test-renderer';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Icon from 'components/Icon';

describe('Component -> Icon', () => {
  it('should render the Redbubble icon without throwing an error', () => {
    expect(renderer.create(<Icon icon="redbubble" />)).toMatchSnapshot();
  });

  it('should render the Instagram icon without throwing an error', () => {
    expect(renderer.create(<Icon icon={FaInstagram} />)).toMatchSnapshot();
  });

  it('should render the Github icon without throwing an error', () => {
    expect(renderer.create(<Icon icon={FaGithub} />)).toMatchSnapshot();
  });

  it('should render the LinkedIn icon without throwing an error', () => {
    expect(renderer.create(<Icon icon={FaLinkedin} />)).toMatchSnapshot();
  });
});
