import { LOCATIONS } from 'routers/constants';

type MenuItem = {
  label: string,
  target: typeof LOCATIONS[keyof typeof LOCATIONS]
};

const menu: MenuItem[] = [
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
];

export default menu;
