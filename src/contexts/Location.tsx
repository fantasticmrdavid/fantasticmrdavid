import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';
import { LOCATIONS } from 'routers/constants';

export interface LocationContext {
  location: typeof LOCATIONS[keyof typeof LOCATIONS],
  setLocation: Dispatch<SetStateAction<typeof LOCATIONS[keyof typeof LOCATIONS]>>
}

interface LocationContextProps {
  children: ReactNode
}

const locationContextValues = {
  location: LOCATIONS.home,
  setLocation: () => {},
};

export const LocationContext = createContext<LocationContext>(locationContextValues);

export const LocationProvider: FC<LocationContextProps> = ({
  children,
}) => {
  const [location, setLocation] = useState(locationContextValues.location);
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
