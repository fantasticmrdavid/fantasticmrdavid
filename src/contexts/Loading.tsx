import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';

interface LoadingState {
  firstLoad: boolean,
  images: boolean,
  media: boolean,
  popup: boolean,
}

interface LoadingContextValues {
  loading: LoadingState,
  getIsLoading: () => boolean,
  stopLoading: () => void,
  setLoading: Dispatch<SetStateAction<LoadingState>>
}

interface LoadingContextProps {
  children: ReactNode
}

const loadingContextInitialValues = {
  loading: {
    firstLoad: true,
    images: false,
    media: true,
    popup: false,
  },
  getIsLoading: () => false,
  stopLoading: () => {},
  setLoading: () => {},
};

export const LoadingContext = createContext<LoadingContextValues>(loadingContextInitialValues);

export const LoadingProvider: FC<LoadingContextProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(loadingContextInitialValues.loading);
  const getIsLoading = () => Object.values(loading).some((l: boolean) => l);
  const stopLoading = () => setLoading({
    firstLoad: false,
    images: false,
    media: false,
    popup: false,
  });
  return (
    <LoadingContext.Provider value={{
      loading,
      getIsLoading,
      setLoading,
      stopLoading,
    }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
