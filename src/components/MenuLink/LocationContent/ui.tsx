import React, { memo } from 'react';
import { LOCATIONS } from 'routers/constants';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { Content } from './styles';

interface Props {
  isCurrent: boolean,
  location: string,
}

export default memo(
  ({ location, isCurrent }: Props) => {
    if (!location) return null;

    return (
      <Content isCurrent={isCurrent}>
        { location === LOCATIONS.about && <About /> }
        { location === LOCATIONS.work && <Work /> }
        { location === LOCATIONS.contact && <Contact /> }
      </Content>
    );
  },
);
