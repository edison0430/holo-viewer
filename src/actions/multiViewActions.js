import {
  ADD_STREAM_TO_MULTI_VIEW,
  REMOVE_STREAM_FROM_MULTI_VIEW,
  CHANGE_STATUS_TO_PLAY,
  CHANGE_STATUS_TO_PAUSE,
  CHANGE_STATUS_TO_MUTE,
  CHANGE_STATUS_TO_UNMUTE,
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

export const playVideo = (id) => {
  return {
    type: CHANGE_STATUS_TO_PLAY,
    payload: id,
  };
};

export const pauseVideo = (id) => {
  return {
    type: CHANGE_STATUS_TO_PAUSE,
    payload: id,
  };
};

export const mute = (id) => {
  return {
    type: CHANGE_STATUS_TO_MUTE,
    payload: id,
  };
};

export const unMute = (id) => {
  return {
    type: CHANGE_STATUS_TO_UNMUTE,
    payload: id,
  };
};
