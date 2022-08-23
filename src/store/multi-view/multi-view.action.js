import { MULTIVIEW_ACTION_TYPES } from './multi-view.types';

export const addStreamToMultiView = (stream) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.ADD_STREAM_TO_MULTI_VIEW,
    payload: stream,
  };
};

export const removeStreamFromMultiView = (id) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.REMOVE_STREAM_FROM_MULTI_VIEW,
    payload: id,
  };
};

export const playVideo = (id) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_PLAY,
    payload: id,
  };
};

export const pauseVideo = (id) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_PAUSE,
    payload: id,
  };
};

export const mute = (id) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_MUTE,
    payload: id,
  };
};

export const unMute = (id) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_UNMUTE,
    payload: id,
  };
};

export const showChat = (id) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.SHOW_CHAT,
    payload: id,
  };
};

export const hideChat = (id) => {
  return {
    type: MULTIVIEW_ACTION_TYPES.HIDE_CHAT,
    payload: id,
  };
};
