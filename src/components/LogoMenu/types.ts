export type StateProps = {
  isActive: boolean,
};

export type DispatchProps = {
  toggleActive: (isActive: boolean) => void,
};

export type ContainerProps = {
  location?: string,
}
