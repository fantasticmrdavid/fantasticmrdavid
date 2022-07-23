import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';

export interface WorkLocationContextValues {
  workLocation: string | undefined,
  setWorkLocation: Dispatch<SetStateAction<string | undefined>>
}

interface WorkLocationContextProps {
  children: ReactNode
}

const workLocationContextInitialValues = {
  workLocation: undefined,
  setWorkLocation: () => {},
};

export const WorkLocationContext = createContext<WorkLocationContextValues>(workLocationContextInitialValues);

export const WorkLocationProvider: FC<WorkLocationContextProps> = ({
  children,
}) => {
  const [workLocation, setWorkLocation] = useState<string | undefined>(
    workLocationContextInitialValues.workLocation,
  );
  return (
    <WorkLocationContext.Provider value={{ workLocation, setWorkLocation }}>
      {children}
    </WorkLocationContext.Provider>
  );
};
