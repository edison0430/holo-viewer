import { combineReducers } from 'redux';
import streamReducer from './streamReducer';
import multiViewReducer from './multiViewReducer';

export default combineReducers({
  streamReducer,
  multiViewReducer,
});
