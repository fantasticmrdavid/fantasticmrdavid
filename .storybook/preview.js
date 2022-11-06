import { MemoryRouter } from "react-router-dom";
import { PopupProvider } from "../src/contexts/Popup";
import { LocationProvider } from "../src/contexts/Location";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <PopupProvider>
      <LocationProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </LocationProvider>
    </PopupProvider>
  ),
];
