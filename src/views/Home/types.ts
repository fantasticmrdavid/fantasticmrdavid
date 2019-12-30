export type StateProps = {
  image: {
    name: string,
    src: string,
  },
  isLoading: boolean,
};

export type DispatchProps = {
  updateImage: () => void,
};
