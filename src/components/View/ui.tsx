import React, { memo } from 'react';
import LogoMenu from 'components/LogoMenu';
import Popup from 'components/Popup';
import Home from 'views/Home';
import About from 'views/About';
import Work from 'views/Work';
import Tinkerings from 'views/Tinkerings';
import Contact from 'views/Contact';
import GlobalStyles from 'styles/global';
import * as styles from './styles';
import { ContainerProps, DispatchProps, StateProps } from './types';

export type UiProps = ContainerProps & DispatchProps & StateProps;

const {
  Container,
  Control,
  Media,
  ShutterTop,
  ShutterBottom,
  MediaLoadingMessage,
} = styles;

export default memo(
  ({ location, isLoading, isFirstLoad }: UiProps) => {
    const isFirstMediaLoading = isLoading && isFirstLoad;
    return (
      <>
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
            { location === 'about' && <About isLoading={isLoading} /> }
            { location === 'work' && <Work /> }
            { location === 'tinkerings' && <Tinkerings /> }
            { location === 'contact' && <Contact /> }
          </Media>
        </Container>
      </>
    );
  },
);
