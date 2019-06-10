import React from 'react';
import renderer from 'react-test-renderer';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Icon from 'components/Icon';

describe('Component -> Icon', () => {
  it('should render the Redbubble icon without throwing an error', () => {
    expect(renderer.create(<Icon icon="redbubble" />)).toMatchSnapshot();
  });

  it('should render the Instagram icon without throwing an error', () => {
    expect(renderer.create(<Icon icon={faInstagram} />)).toMatchSnapshot();
  });

  it('should render the Github icon without throwing an error', () => {
    expect(renderer.create(<Icon icon={faGithub} />)).toMatchSnapshot();
  });

  it('should render the LinkedIn icon without throwing an error', () => {
    expect(renderer.create(<Icon icon={faLinkedin} />)).toMatchSnapshot();
  });
});
