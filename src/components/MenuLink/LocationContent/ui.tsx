import React, { memo } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { Content } from './styles';

interface Props {
  current: boolean,
  location: string,
}

export default memo(
  ({ location, current }: Props) => {
    if (!location) return null;

    return (
      <Content current={current}>
        { location === 'about' && <About /> }
        { location === 'work' && <Work /> }
        { location === 'contact' && <Contact /> }
      </Content>
    );
  },
);
