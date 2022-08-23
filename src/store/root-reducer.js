import { combineReducers } from 'redux';

import { streamReducer } from './stream/stream.reducer';
import { multiViewReducer } from './multi-view/multi-view.reducer';

export const rootReducer = combineReducers({
  streamReducer,
  multiViewReducer,
});
