export type StateProps = {
  current: string,
  isLoading: boolean,
};

export type DispatchProps = {
  setTarget: (target: string) => void,
  startImagesLoading: () => void,
  stopLoading: () => void,
};

export type ContainerProps = {
  target?: string,
};
