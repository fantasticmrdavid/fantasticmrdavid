import { LOCATIONS } from 'routers/Routes';

export default [
  {
    label: 'About',
    target: LOCATIONS.about,
  },
  {
    label: 'Latest Work',
    target: LOCATIONS.work,
  },
  {
    label: 'Contact',
    target: LOCATIONS.contact,
  },
] as {
  label: string,
  target: keyof typeof LOCATIONS
}[];
