import React, { memo, useState } from "react";
import { LogoMenu } from "components/LogoMenu/LogoMenu";
import { Home } from "views/Home/Home";
import { About } from "views/About/About";
import { Work } from "views/Work/Work";
import { Contact } from "views/Contact/Contact";
import GlobalStyles from "styles/global";
import { ImagePreloader } from "components/ImagePreloader/ImagePreloader";
import { LOCATIONS } from "routers/constants";
import {
  Container,
  Control,
  Media,
  ShutterTop,
  ShutterBottom,
  MediaLoadingMessage,
} from "./view.styles";

export type UiProps = {
  location: (typeof LOCATIONS)[keyof typeof LOCATIONS];
  target?: string;
};

export const View = memo(({ location, target }: UiProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <ImagePreloader
        hideCompletedCount
        images={["/assets/images/legoFlinders.jpg"]}
        completedAction={() => setIsLoading(false)}
      />
      <GlobalStyles />
      <Container>
        <Control>
          <LogoMenu location={location} />
        </Control>

        <Media $location={location}>
          <ShutterTop $isFirstMediaLoading={isLoading} />
          <ShutterBottom $isFirstMediaLoading={isLoading} />
          <MediaLoadingMessage $isFirstMediaLoading={isLoading}>
            Hello!
          </MediaLoadingMessage>
          {location === LOCATIONS.home && <Home isLoading={isLoading} />}
          {location === LOCATIONS.about && <About isLoading={isLoading} />}
          {location === LOCATIONS.work && <Work target={target} />}
          {location === LOCATIONS.contact && <Contact />}
        </Media>
      </Container>
    </>
  );
});
