import React, { memo } from 'react';
import About from './About';
import Work from './Work';
import Tinkerings from './Tinkerings';
import Contact from './Contact';
import * as styles from './styles';

interface Props {
  current: boolean,
  location: string,
}

const { Content } = styles;

export default memo(
  ({ location, current }: Props) => {
    if (!location) return null;

    return (
      <Content current={current}>
        { location === 'about' && <About /> }
        { location === 'work' && <Work /> }
        { location === 'tinkerings' && <Tinkerings /> }
        { location === 'contact' && <Contact /> }
      </Content>
    );
  },
);
