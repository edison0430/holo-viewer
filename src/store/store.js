import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
