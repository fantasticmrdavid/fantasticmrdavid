import { MemoryRouter } from "react-router-dom";
import { PopupProvider } from "../src/contexts/Popup";

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
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </PopupProvider>
  ),
];
