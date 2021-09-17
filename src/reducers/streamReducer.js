import {
  REQUEST_LIVE_STREAM,
  RECEIVE_LIVE_STREAM,
  REQUEST_SCHEDULED_STREAM,
  RECEIVE_SCHEDULED_STREAM,
  FETCH_CHANNEL,
  FETCH_MEMBER,
} from '../actions/types';

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

const streamReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LIVE_STREAM:
      return { ...state, liveStream: { ...state.liveStream, isLoading: true } };
    case RECEIVE_LIVE_STREAM:
      return {
        ...state,
        liveStream: { items: action.payload, isLoading: false },
      };
    case REQUEST_SCHEDULED_STREAM:
      return {
        ...state,
        scheduledStream: { ...state.scheduledStream, isLoading: true },
      };
    case RECEIVE_SCHEDULED_STREAM:
      return {
        ...state,
        scheduledStream: {
          items: action.payload,
          isLoading: false,
        },
      };
    case FETCH_CHANNEL:
      return { ...state, channel: action.payload };
    case FETCH_MEMBER:
      return { ...state, member: action.payload };
    default:
      return state;
  }
};

export default streamReducer;
