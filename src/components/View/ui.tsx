import React, { Fragment, memo } from 'react';
import LogoMenu from 'components/LogoMenu';
import Popup from 'components/Popup';
import Home from 'views/Home';
import About from 'views/About';
import Work from 'views/Work';
import Contact from 'views/Contact';
import GlobalStyles from 'styles/global';
import * as styles from './styles';

export interface Props {
  location: string,
  loading: boolean,
  firstLoad: boolean,
}

const {
  Container,
  Control,
  Media,
  ShutterTop,
  ShutterBottom,
  MediaLoadingMessage,
} = styles;

export default memo(
  ({ location, loading, firstLoad }: Props) => {
    const firstMediaLoading = loading && firstLoad;
    return (
      <Fragment>
        <GlobalStyles />
        <Container>
          <Popup />
          <Control>
            <LogoMenu location={location} />
          </Control>

          <Media location={location}>
            <ShutterTop firstMediaLoading={firstMediaLoading} />
            <ShutterBottom firstMediaLoading={firstMediaLoading} />
            <MediaLoadingMessage firstMediaLoading={firstMediaLoading}>Hello!</MediaLoadingMessage>
            { location === 'home' && <Home /> }
            { location === 'about' && <About loading={loading} /> }
            { location === 'work' && <Work /> }
            { location === 'contact' && <Contact /> }
          </Media>
        </Container>
      </Fragment>
    );
  },
);
