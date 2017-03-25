import { createStore } from 'redux';
import reducers from './reducers';

const showDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  reducers,
  showDevTools
);

export default store;
