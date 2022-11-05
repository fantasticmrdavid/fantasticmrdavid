import React, { memo } from 'react';
import { LOCATIONS } from 'routers/constants';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { Content } from './locationContent.styles';

interface LocationContentProps {
  isCurrent: boolean,
  location: string,
}

export const LocationContent = memo(
  ({ location, isCurrent }: LocationContentProps) => {
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
