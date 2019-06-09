import React, { memo } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import * as styles from './styles';

interface Props {
  current: boolean,
  location: string,
}

export default memo(
  ({ location, current }: Props) => {
    const { Content } = styles;

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
