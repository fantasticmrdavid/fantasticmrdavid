import React, { memo, useContext } from 'react';
import LogoMenu from 'components/LogoMenu';
import Popup from 'components/Popup';
import Home from 'views/Home';
import About from 'views/About';
import Work from 'views/Work';
import Contact from 'views/Contact';
import GlobalStyles from 'styles/global';
import { LoadingContext } from 'contexts/Loading';
import ImagePreloader from 'components/ImagePreloader';
import {
  Container,
  Control,
  Media,
  ShutterTop,
  ShutterBottom,
  MediaLoadingMessage,
} from './styles';
import { ContainerProps, StateProps } from './types';

export type UiProps = ContainerProps & StateProps;

export default memo(
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
          <Popup />
          <Control>
            <LogoMenu location={location} />
          </Control>

          <Media location={location}>
            <ShutterTop isFirstMediaLoading={isFirstMediaLoading} />
            <ShutterBottom isFirstMediaLoading={isFirstMediaLoading} />
            <MediaLoadingMessage isFirstMediaLoading={isFirstMediaLoading}>
              Hello!
            </MediaLoadingMessage>
            { location === 'home' && <Home /> }
            { location === 'about' && <About /> }
            { location === 'work' && <Work target={target} /> }
            { location === 'contact' && <Contact /> }
          </Media>
        </Container>
      </>
    );
  },
);
