import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';

export interface WorkLocationContext {
  workLocation: string | undefined,
  setWorkLocation: Dispatch<SetStateAction<string | undefined>>
}

interface WorkLocationContextProps {
  children: ReactNode
}

const workLocationContextValues = {
  workLocation: undefined,
  setWorkLocation: () => {},
};

export const WorkLocationContext = createContext<WorkLocationContext>(workLocationContextValues);

export const WorkLocationProvider: FC<WorkLocationContextProps> = ({
  children,
}) => {
  const [workLocation, setWorkLocation] = useState<string | undefined>(
    workLocationContextValues.workLocation,
  );
  return (
    <WorkLocationContext.Provider value={{ workLocation, setWorkLocation }}>
      {children}
    </WorkLocationContext.Provider>
  );
};
