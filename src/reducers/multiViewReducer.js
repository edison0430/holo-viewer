import {
  ADD_STREAM_TO_MULTI_VIEW,
  REMOVE_STREAM_FROM_MULTI_VIEW,
} from '../actions/types';

const multiViewReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STREAM_TO_MULTI_VIEW:
      return [...state, action.payload];
    case REMOVE_STREAM_FROM_MULTI_VIEW:
      return [...state].filter((stream) => {
        console.log(stream.id, action.payload);
        return stream.id !== action.payload;
      });
    default:
      return state;
  }
};

export default multiViewReducer;
