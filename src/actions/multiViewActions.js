import {
  ADD_STREAM_TO_MULTI_VIEW,
  REMOVE_STREAM_FROM_MULTI_VIEW,
} from './types';

export const addStreamToMultiView = (stream) => {
  return {
    type: ADD_STREAM_TO_MULTI_VIEW,
    payload: stream,
  };
};

export const removeStreamFromMultiView = (id) => {
  return {
    type: REMOVE_STREAM_FROM_MULTI_VIEW,
    payload: id,
  };
};
