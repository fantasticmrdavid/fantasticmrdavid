import React, { memo, useContext } from 'react';
import { LogoMenu } from 'components/LogoMenu/LogoMenu';
import { Home } from 'views/Home/Home';
import { About } from 'views/About/About';
import { Work } from 'views/Work/Work';
import { Contact } from 'views/Contact/Contact';
import GlobalStyles from 'styles/global';
import { LoadingContext } from 'contexts/Loading';
import ImagePreloader from 'components/ImagePreloader';
import { LOCATIONS } from 'routers/constants';
import {
  Container,
  Control,
  Media,
  ShutterTop,
  ShutterBottom,
  MediaLoadingMessage,
} from './view.styles';

export type UiProps = {
  location: typeof LOCATIONS[keyof typeof LOCATIONS],
  target?: string
};

export const View = memo(
  ({
    location,
    target,
  }: UiProps) => {
    const { getIsLoading, loading, setLoading } = useContext(LoadingContext);
    const isFirstMediaLoading = getIsLoading() && loading.firstLoad;

    return (
      <>
        <ImagePreloader
          hideCompletedCount
          images={['/assets/images/legoFlinders.jpg']}
          completedAction={() => setLoading({ ...loading, firstLoad: false, media: false })}
        />
        <GlobalStyles />
        <Container>
          <Control>
            <LogoMenu location={location} />
          </Control>

          <Media location={location}>
            <ShutterTop isFirstMediaLoading={isFirstMediaLoading} />
            <ShutterBottom isFirstMediaLoading={isFirstMediaLoading} />
            <MediaLoadingMessage isFirstMediaLoading={isFirstMediaLoading}>
              Hello!
            </MediaLoadingMessage>
            { location === LOCATIONS.home && <Home /> }
            { location === LOCATIONS.about && <About /> }
            { location === LOCATIONS.work && <Work target={target} /> }
            { location === LOCATIONS.contact && <Contact /> }
          </Media>
        </Container>
      </>
    );
  },
);
