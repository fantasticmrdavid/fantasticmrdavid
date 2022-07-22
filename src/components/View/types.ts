import { LOCATIONS } from 'routers/Routes';

export type StateProps = {
  location: keyof typeof LOCATIONS,
  popup: any,
};

export type ContainerProps = {
  location?: keyof typeof LOCATIONS,
  target?: string
};
