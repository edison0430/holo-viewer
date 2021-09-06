import {
  ADD_STREAM_TO_MULTI_VIEW,
  REMOVE_STREAM_FROM_MULTI_VIEW,
  CHANGE_STATUS_TO_PLAY,
  CHANGE_STATUS_TO_PAUSE,
  CHANGE_STATUS_TO_MUTE,
  CHANGE_STATUS_TO_UNMUTE,
  SHOW_CHAT,
  HIDE_CHAT,
} from '../actions/types';

const multiViewReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STREAM_TO_MULTI_VIEW:
      return [
        ...state,
        {
          ...action.payload,
          isChatShown: true,
          isPlaying: false,
          isMuted: false,
        },
      ];
    case REMOVE_STREAM_FROM_MULTI_VIEW:
      return [...state].filter((stream) => {
        return stream.id !== action.payload;
      });
    case CHANGE_STATUS_TO_PLAY:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isPlaying = true;

        return stream;
      });
    case CHANGE_STATUS_TO_PAUSE:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isPlaying = false;

        return stream;
      });
    case CHANGE_STATUS_TO_MUTE:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isMuted = true;

        return stream;
      });
    case CHANGE_STATUS_TO_UNMUTE:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isMuted = false;

        return stream;
      });
    case SHOW_CHAT:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isChatShown = true;

        return stream;
      });
    case HIDE_CHAT:
      return state.map((stream) => {
        if (stream.id === action.payload) stream.isChatShown = false;

        return stream;
      });
    default:
      return state;
  }
};

export default multiViewReducer;
