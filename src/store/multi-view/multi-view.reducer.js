import { MULTIVIEW_ACTION_TYPES } from './multi-view.types';

export const multiViewReducer = (state = [], action) => {
  switch (action.type) {
    case MULTIVIEW_ACTION_TYPES.ADD_STREAM_TO_MULTI_VIEW:
      return [
        ...state,
        {
          ...action.payload,
          isChatShown: true,
          isPlaying: false,
          isMuted: false,
        },
      ];
    case MULTIVIEW_ACTION_TYPES.REMOVE_STREAM_FROM_MULTI_VIEW:
      return [...state].filter((stream) => {
        return stream.id !== action.payload;
      });
    case MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_PLAY:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isPlaying = true;

        return stream;
      });
    case MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_PAUSE:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isPlaying = false;

        return stream;
      });
    case MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_MUTE:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isMuted = true;

        return stream;
      });
    case MULTIVIEW_ACTION_TYPES.CHANGE_STATUS_TO_UNMUTE:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isMuted = false;

        return stream;
      });
    case MULTIVIEW_ACTION_TYPES.SHOW_CHAT:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isChatShown = true;

        return stream;
      });
    case MULTIVIEW_ACTION_TYPES.HIDE_CHAT:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isChatShown = false;

        return stream;
      });
    default:
      return state;
  }
};
