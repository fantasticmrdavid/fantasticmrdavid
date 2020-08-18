export type StateProps = {
  current: string,
  isLoading: boolean,
};

export type DispatchProps = {
  startImagesLoading: () => void,
  stopLoading: () => void,
};
