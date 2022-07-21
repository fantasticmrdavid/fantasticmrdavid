import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';

export interface LocationContext {
  location: string
  updateLocation: Dispatch<SetStateAction<string>>
}

interface LocationContextProps {
  children: ReactNode
}

const locationContextValues = {
  location: 'home',
  updateLocation: () => {},
};

export const LocationContext = createContext<LocationContext>(locationContextValues);

export const LocationProvider: FC<LocationContextProps> = ({
  children,
}) => {
  const [location, setLocation] = useState(locationContextValues.location);
  return (
    <LocationContext.Provider value={{ location, updateLocation: setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
