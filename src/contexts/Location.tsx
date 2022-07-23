import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';
import { LOCATIONS } from 'routers/constants';

export interface LocationContextValues {
  location: typeof LOCATIONS[keyof typeof LOCATIONS],
  setLocation: Dispatch<SetStateAction<typeof LOCATIONS[keyof typeof LOCATIONS]>>
}

interface LocationContextProps {
  children: ReactNode
}

const locationContextInitialValues = {
  location: LOCATIONS.home,
  setLocation: () => {},
};

export const LocationContext = createContext<LocationContextValues>(locationContextInitialValues);

export const LocationProvider: FC<LocationContextProps> = ({
  children,
}) => {
  const [location, setLocation] = useState(locationContextInitialValues.location);
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
