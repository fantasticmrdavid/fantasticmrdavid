import { LOCATIONS } from 'routers/Routes';

export type ContainerProps = {
  location?: keyof typeof LOCATIONS,
};
