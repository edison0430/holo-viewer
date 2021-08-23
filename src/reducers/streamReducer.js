import {
  FETCH_LIVE_STREAM,
  FETCH_SCHEDULED_STREAM,
  FETCH_CHANNEL,
  FETCH_MEMBER,
} from '../actions/types';

const INITAL_STATE = {
  liveStream: [],
  scheduledStream: [],
  channel: [],
  member: [],
};

const streamReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIVE_STREAM:
      return { ...state, liveStream: action.payload };
    case FETCH_SCHEDULED_STREAM:
      return { ...state, scheduledStream: action.payload };
    case FETCH_CHANNEL:
      return { ...state, channel: action.payload };
    case FETCH_MEMBER:
      return { ...state, member: action.payload };
    default:
      return state;
  }
};

export default streamReducer;
