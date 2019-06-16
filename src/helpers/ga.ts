import ReactGA from 'react-ga';

ReactGA.initialize('UA-91050990-1');
ReactGA.pageview(window.location.pathname + window.location.search);
