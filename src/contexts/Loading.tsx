import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';

interface LoadingState {
  firstLoad: boolean,
  images: boolean,
  media: boolean,
  popup: boolean,
}

interface LoadingContext {
  loading: LoadingState,
  getIsLoading: () => boolean,
  stopLoading: () => void,
  setLoading: Dispatch<SetStateAction<LoadingState>>
}

interface LoadingContextProps {
  children: ReactNode
}

const loadingContextValues = {
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

export const LoadingContext = createContext<LoadingContext>(loadingContextValues);

export const LoadingProvider: FC<LoadingContextProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(loadingContextValues.loading);
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
