import { STREAM_ACTION_TYPES } from './stream.types';

const INITAL_STATE = {
  liveStream: {
    isLoading: false,
    items: [],
  },
  scheduledStream: {
    isLoading: false,
    items: [],
  },
  channel: [],
  member: [],
};

export const streamReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case STREAM_ACTION_TYPES.REQUEST_LIVE_STREAM:
      return { ...state, liveStream: { ...state.liveStream, isLoading: true } };
    case STREAM_ACTION_TYPES.RECEIVE_LIVE_STREAM:
      return {
        ...state,
        liveStream: { items: action.payload, isLoading: false },
      };
    case STREAM_ACTION_TYPES.REQUEST_SCHEDULED_STREAM:
      return {
        ...state,
        scheduledStream: { ...state.scheduledStream, isLoading: true },
      };
    case STREAM_ACTION_TYPES.RECEIVE_SCHEDULED_STREAM:
      return {
        ...state,
        scheduledStream: {
          items: action.payload,
          isLoading: false,
        },
      };
    case STREAM_ACTION_TYPES.FETCH_CHANNEL:
      return { ...state, channel: action.payload };
    case STREAM_ACTION_TYPES.FETCH_MEMBER:
      return { ...state, member: action.payload };
    default:
      return state;
  }
};
