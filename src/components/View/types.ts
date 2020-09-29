export type StateProps = {
  location: string,
  isLoading: boolean,
  isFirstLoad: boolean,
  popup: any,
};

export type DispatchProps = {
  updateLocation: (newLocation: string) => void,
};

export type ContainerProps = {
  location?: string,
  target?: string
};
