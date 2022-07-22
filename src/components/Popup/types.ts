export type StateProps = {
  isActive: boolean,
};

export type DispatchProps = {
  close: () => void;
};

export type ContainerProps = {
  close: (...args: any[]) => any,
  orientation: string,
  title: string,
  url: string,
};
